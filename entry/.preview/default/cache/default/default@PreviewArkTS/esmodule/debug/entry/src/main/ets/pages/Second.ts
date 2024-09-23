if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Second_Params {
    start?: boolean;
    reverse?: boolean;
    iterations?: number;
}
class Second extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__start = new ObservedPropertySimplePU(false, this, "start");
        this.__reverse = new ObservedPropertySimplePU(false, this, "reverse");
        this.__iterations = new ObservedPropertySimplePU(1, this, "iterations");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Second_Params) {
        if (params.start !== undefined) {
            this.start = params.start;
        }
        if (params.reverse !== undefined) {
            this.reverse = params.reverse;
        }
        if (params.iterations !== undefined) {
            this.iterations = params.iterations;
        }
    }
    updateStateVars(params: Second_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__start.purgeDependencyOnElmtId(rmElmtId);
        this.__reverse.purgeDependencyOnElmtId(rmElmtId);
        this.__iterations.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__start.aboutToBeDeleted();
        this.__reverse.aboutToBeDeleted();
        this.__iterations.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __start: ObservedPropertySimplePU<boolean>;
    get start() {
        return this.__start.get();
    }
    set start(newValue: boolean) {
        this.__start.set(newValue);
    }
    private __reverse: ObservedPropertySimplePU<boolean>;
    get reverse() {
        return this.__reverse.get();
    }
    set reverse(newValue: boolean) {
        this.__reverse.set(newValue);
    }
    private __iterations: ObservedPropertySimplePU<number>;
    get iterations() {
        return this.__iterations.get();
    }
    set iterations(newValue: number) {
        this.__iterations.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Second.ets(15:5)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create();
            Flex.debugLine("entry/src/main/ets/pages/Second.ets(16:7)", "entry");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            CheckboxGroup.create({ group: 'groupname' });
            CheckboxGroup.debugLine("entry/src/main/ets/pages/Second.ets(17:9)", "entry");
            CheckboxGroup.padding('20');
            CheckboxGroup.borderWidth('1');
        }, CheckboxGroup);
        CheckboxGroup.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('All');
            Text.debugLine("entry/src/main/ets/pages/Second.ets(20:9)", "entry");
            Text.padding('20');
            Text.borderWidth('1');
        }, Text);
        Text.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Second";
    }
}
registerNamedRoute(() => new Second(undefined, {}), "", { bundleName: "com.example.helloworld", moduleName: "entry", pagePath: "pages/Second", pageFullPath: "entry/src/main/ets/pages/Second", integratedHsp: "false" });
