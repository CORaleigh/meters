define(["exports","./index-86304dcd","./index2-600fb1b2","./t9n-cc9a26c8","./expressions-86d9b535"],(function(s,i,t,a,e){"use strict";const l="flex-container",n="flex-grow",o=i.proxyCustomElement(class extends i.H{constructor(){super(),this.__registerHost(),this.analysisExpressionChange=i.createEvent(this,"analysisExpressionChange",7),this.spatialRelationships=Object.values(e.SpatialRelationships),this.spatialRelationshipUnits=e.SpatialRelationshipUnits,this.onSpatialRelationshipSelect=s=>{const i=s.target.selectedOption.value;this.spatialExpression=this.spatialExpression.changeSpatialRelationship(i);const t=this.spatialExpression.selectingLayer,a=this.spatialRelationshipLayers.get(i),e=a.find((s=>s.id===t.id));this.spatialExpression=void 0!==e?this.spatialExpression.changeSelectingLayer(e):this.spatialExpression.changeSelectingLayer(a[0]),this.analysisExpressionChange.emit()},this.onSpatialRelationshipUnitsSelect=s=>{const i=s.target.selectedOption.value;this.spatialExpression=this.spatialExpression.changeSpatialRelationshipUnit(i),this.analysisExpressionChange.emit()},this.onDistanceInputChange=s=>{const i=parseFloat(s.target.value);this.spatialExpression=this.spatialExpression.changeSpatialRelationshipDistance(i),this.analysisExpressionChange.emit()},this.onLayerSelectChange=s=>{var i;const t=s.target.value,a=null===(i=this.layers)||void 0===i?void 0:i.find((s=>s.id===t));void 0!==this.layers&&void 0!==a&&(this.spatialExpression=this.spatialExpression.changeSelectingLayer(a)),this.analysisExpressionChange.emit()},this.spatialExpression=void 0,this.layers=void 0}setLayersToSpatialRelationships(s){void 0!==s&&(this.spatialRelationshipLayers=e.SpatialExpression.getValidLayersForRelationships(this.spatialExpression.layer,s,this.spatialRelationships))}componentWillLoad(){var s;this.strings=a.getStrings(),this.setLayersToSpatialRelationships(this.layers),this.spatialRelationshipLayers=e.SpatialExpression.getValidLayersForRelationships(this.spatialExpression.layer,null!==(s=this.layers)&&void 0!==s?s:[],this.spatialRelationships)}render(){return i.h(i.Host,null,this.renderSpatialRelationshipSelect(),this.renderLayerSelect())}renderSpatialRelationshipSelect(s="auto"){const a=this.spatialExpression.spatialRelationship;return i.h("div",{class:l},i.h("calcite-select",{class:n,label:this.strings.spatialRelationshipSelect,width:s,onCalciteSelectChange:this.onSpatialRelationshipSelect},this.spatialRelationships.map((s=>i.h("calcite-option",{selected:a===s,value:s,key:s,disabled:t.isEmptyDataItem(this.spatialRelationshipLayers.get(s))},t.isEmptyDataItem(this.spatialRelationshipLayers.get(s))?t.formatMessage(this.strings.spatialRelationships[s],{noCompatibleLayers:this.strings.noCompatibleLayers}):t.formatMessage(this.strings.spatialRelationships[s],{noCompatibleLayers:""}))))),this.spatialExpression.isDistanceRelationship&&this.renderSpatialRelationshipParams())}renderSpatialRelationshipParams(s="auto"){var t,a;const e=null===(t=this.spatialExpression.spatialRelationshipParams)||void 0===t?void 0:t.units,o=null===(a=this.spatialExpression.spatialRelationshipParams)||void 0===a?void 0:a.distance;return i.h("div",{class:l},i.h("calcite-input-number",{class:n,step:1,placeholder:this.strings.inputPlaceholderText,value:void 0===o?"":`${o}`,onCalciteInputNumberChange:this.onDistanceInputChange}),i.h("calcite-select",{class:n,label:this.strings.spatialRelationshipParamsDistanceInput,width:s,onCalciteSelectChange:this.onSpatialRelationshipUnitsSelect},this.spatialRelationshipUnits.map((s=>i.h("calcite-option",{selected:e===s,value:s,key:s},this.strings.spatialRelationshipUnits[s])))))}renderLayerSelect(s="auto"){const a=this.spatialRelationshipLayers.get(this.spatialExpression.spatialRelationship),e=this.spatialExpression.selectingLayer;return i.h("calcite-select",{class:"layer-select",label:this.strings.spatialRelationshipLayerSelect,width:s,onCalciteSelectChange:this.onLayerSelectChange},null==a?void 0:a.map((s=>i.h("calcite-option",{value:s.id,key:s.id,selected:(null==e?void 0:e.id)===s.id},t.getLayerLabel(s)))))}get hostElement(){return this}static get watchers(){return{layers:["setLayersToSpatialRelationships"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}.flex-container{display:flex}.flex-container .flex-grow{flex-grow:1}"}},[0,"analysis-spatial-expression",{spatialExpression:[1040],layers:[16]}]);function p(){"undefined"!=typeof customElements&&["analysis-spatial-expression"].forEach((s=>{"analysis-spatial-expression"===s&&(customElements.get(s)||customElements.define(s,o))}))}p(),s.AnalysisSpatialExpression=o,s.defineCustomElement=p}));