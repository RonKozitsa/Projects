import { Component, Input } from '@angular/core';

@Component({
    selector: 'plotly-example',
    template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
})
export class PlotlyExampleComponent {
    @Input('graph') graph;
}