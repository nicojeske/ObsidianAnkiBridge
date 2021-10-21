import { NoteBase } from 'notes/base'
import { Postprocessor, PostprocessorContext } from './base'

export class LinkPostprocessor extends Postprocessor {
    static id = 'LinkPostprocessor'
    static displayName = 'LinkPostprocessor'
    static weight = 50
    static defaultConfigState: true

    public process(note: NoteBase, text: string, ctx: PostprocessorContext): string {
        const regex = /(\[\[.*\]\])/g
        text = text.replace(regex, (match, group1) => {
            const el = document.createElement('div')
            MarkdownRenderer.renderMarkdown(group1, el, '', undefined)
            const anchor = el.firstElementChild.firstElementChild

            const linkText = anchor.textContent
            const linkAddr = anchor.getAttribute('href')

            const uri = renderObsidianURIOpen(this.app.vault, linkAddr)
            const elementStr = `<a href="${uri}">${linkText}</a>`

            return elementStr
        })

        return text
    }
}
