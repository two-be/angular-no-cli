import {Component, VERSION} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello {{name}}</h1>
    `,
    styles: ['']
})
export class AppComponent {
    name = `Angular! v${VERSION.full}`
}
