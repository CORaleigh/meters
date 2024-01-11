define(["exports","./index-86304dcd","./index2-600fb1b2","./utils-2b3d82c1","./analysis-label2-b880686f"],(function(e,t,a,i,s){"use strict";const l="control",n=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisDateInputChange=t.createEvent(this,"analysisDateInputChange",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.validateSelection=()=>{var e,t;void 0!==this.value&&0!==this.dateInputElement.value.length&&void 0!==this.timeInputElement.value||!0!==this.required?this.isValid=!0:(this.errorMessage=null!==(t=null===(e=this.validationParams)||void 0===e?void 0:e.requiredMessage)&&void 0!==t?t:a.formatMessage(this.strings.requiredError,{label:this.label}),this.isValid=!1)},this.handleDateChange=()=>{var e,t;if(void 0!==(null===(e=this.dateInputElement)||void 0===e?void 0:e.valueAsDate)){const e=this.dateInputElement.valueAsDate,i=!1===a.isEmptyDataItem(null===(t=this.timeInputElement)||void 0===t?void 0:t.value)?this.timeInputElement.value.split(":").map((e=>Number(e))):[e.getHours(),e.getMinutes()],s=new Date(e.getFullYear(),e.getMonth(),e.getDate(),i[0],i[1]);this.localDateValue=s,this.value=s.getTime()}this.analysisDateInputChange.emit()},this.handleTimeChange=()=>{var e;const t=a.isEmptyDataItem(null===(e=this.timeInputElement)||void 0===e?void 0:e.value)?void 0:this.timeInputElement.value.split(":").map((e=>Number(e)));if(void 0!==this.value&&void 0!==t){const e=new Date(this.value),a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t[0],t[1]);this.localDateValue=a,this.value=a.getTime()}this.analysisDateInputChange.emit()},this.value=void 0,this.localDateValue=void 0,this.defaultToNow=!1,this.label=void 0,this.minDate=void 0,this.maxDate=void 0,this.required=void 0,this.isValid=!0,this.validationParams=void 0,this.errorMessage=""}onValueChange(e){this.localDateValue=!0===a.isEmptyDataItem(e)?void 0:new Date(e)}async checkValidity(){return this.validateSelection(),Promise.resolve(this.isValid)}async componentWillLoad(){({strings:this.strings}=await a.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),void 0!==this.value&&(this.localDateValue=new Date(this.value)),!0===this.defaultToNow&&(this.value=Date.now(),this.localDateValue=new Date(this.value),this.analysisDateInputChange.emit())}render(){let e,s;if(void 0!==this.localDateValue)try{this.localDateValue.toISOString(),e=`${this.localDateValue.getHours()}:${this.localDateValue.getMinutes()}`,s=this.localDateValue}catch(e){}return t.h(t.Host,null,void 0!==this.label&&""!==this.label?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,t.h("div",{class:"controls-container"},t.h("calcite-input-date-picker",{scale:i.UIDefaults.Scale,class:l,valueAsDate:s,placement:"bottom",minAsDate:void 0!==this.minDate?new Date(this.minDate):void 0,maxAsDate:void 0!==this.maxDate?new Date(this.maxDate):void 0,onFocusout:this.validateSelection,onCalciteInputDatePickerChange:this.handleDateChange,ref:e=>{this.dateInputElement=e}}),t.h("calcite-input-time-picker",{placement:"bottom",scale:i.UIDefaults.Scale,value:e,class:l,onCalciteInputTimePickerChange:this.handleTimeChange,ref:e=>{this.timeInputElement=e}})),t.h("calcite-input-message",{status:a.UIInputStatus.INVALID,scale:i.UIDefaults.Scale,icon:"exclamationMarkTriangle",hidden:!1!==this.isValid},this.errorMessage))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{value:["onValueChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;flex-direction:column;margin-bottom:var(--analysis-half-spacing);--calcite-ui-border-input:var(--analysis-ui-border-input)}.controls-container{display:flex;column-gap:5%}.control{flex:1 1 auto}.text{cursor:default;padding-bottom:var(--analysis-quarter-spacing);margin-block-start:0;margin-block-end:0}"}},[1,"analysis-date-input",{value:[1538],defaultToNow:[516,"default-to-now"],label:[513],minDate:[514,"min-date"],maxDate:[514,"max-date"],required:[516],validationParams:[16],localDateValue:[32],isValid:[32],errorMessage:[32],checkValidity:[64]}]);function o(){"undefined"!=typeof customElements&&["analysis-date-input","analysis-label"].forEach((e=>{switch(e){case"analysis-date-input":customElements.get(e)||customElements.define(e,n);break;case"analysis-label":customElements.get(e)||s.defineCustomElement()}}))}o(),e.AnalysisDateInput=n,e.defineCustomElement=o}));