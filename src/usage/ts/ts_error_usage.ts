import { NeverError } from "ts_error";

enum Step {
    STEP_1, 
    STEP_2,
    // try to uncomment, get error at compile time 
    // STEP_3 // >> Argument of type 'Step.STEP_3' is not assignable to parameter of type 'never'
}

class StepWizard {

    // if statement control
    buildPane(step: Step): void {
        if (step === Step.STEP_1) {
            console.log("some code for step 1");
            return;
        }
        if (step === Step.STEP_2) {
            console.log("some code for step 2");
            return;
        }
        // Control statement in future. If anybody add NEW step, it part of code will be broken
        throw new NeverError(step); // >> error here if uncomment STEP_3
    }

    // switch statement control
    getStepName(step: Step): string {
        switch (step) {
            case Step.STEP_1: return "step_1"
            case Step.STEP_2: return "step_2"
            default: 
                // Control statement in future. If anybody add NEW step, it part of code will be broken
                throw new NeverError(step); // >> error here if uncomment STEP_3
        }
    }
}