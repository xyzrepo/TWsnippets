import * as vscode from 'vscode'

async function openWindow(content: string) {
	const document = await vscode.workspace.openTextDocument({
		content,
		language: 'html',
	})
	vscode.window.showTextDocument(document)
}

export class CustomSidebarViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'vscodeSidebar.openview'
	private _view?: any
	constructor(private readonly _extensionUri: vscode.Uri) {}

	private activateMessageListener() {
		this._view.webview.onDidReceiveMessage(
			(message: {
				action: any
				data: { message: string }
				command: any
				message: string
			}) => {
				switch (message.command) {
					case 'INSERT':
						const editor = vscode.window.activeTextEditor
						if (editor != undefined) {
							const pos = editor.selection.active

							editor.edit(editBuilder => {
								editBuilder.insert(pos, message.data.message)
							})
						} else {
							openWindow(message.data.message)
						}
						break
					default:
						break
				}
			}
		)
	}
	resolveWebviewView(webviewView: vscode.WebviewView): void | Thenable<void> {
		this._view = webviewView
		this.activateMessageListener()

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,
			localResourceRoots: [this._extensionUri],
		}
		webviewView.webview.html = this.getHtmlContent(webviewView.webview)
	}

	private getHtmlContent(webview: vscode.Webview): string {
		// Get the local path to main script run in the webview,
		// then convert it to a uri we can use in the webview.
		// const snippetsUri = webview.asWebviewUri(
		// 	vscode.Uri.joinPath(this._extensionUri, 'assets', 'snippets', 'cta.template')
		// )

		const scriptUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'assets', 'main.js')
		)

		const styleResetUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'assets', 'reset.css')
		)
		const styleVSCodeUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'assets', 'vscode.css')
		)

		// Same for stylesheet
		const stylesheetUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'assets', 'main.css')
		)
		// Use a nonce to only allow a specific script to be run.
		const nonce = getNonce()

		return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta style-src ${webview.cspSource}; script-src 'nonce-${nonce}' ;">
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="${styleResetUri}" rel="stylesheet" />
				<link href="${styleVSCodeUri}" rel="stylesheet" />
				<link href="${stylesheetUri}" rel="stylesheet" />
			</head>

			<body>
				<section class="container">
					<input type="text" class="search-box" id="search" placeholder="Search" />
					<select name="framework" class="framework-box" id="framework">
						<option value="all">All Components</option>
						<option value="vue">Tailwind + Vue</option>
						<option value="react">Tailwind + React</option>
						<option value="html">Tailwind + HTML</option>
					</select>
					<section id="content" class="content"></section>
				</section>

				
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
		</html>
		`
	}
}

function getNonce() {
	let text = ''
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}
