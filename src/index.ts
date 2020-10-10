const allRegExp = {
    ONLY_LETTERS:  /^[a-zA-Záãâàäéêèëïìíîóòõôöùúûüçñ]+$/,
    ONLY_NUMBERS: /^[0-9]+$/,
}

type ValidationMethods = 'ONLY_LETTERS' | 'ONLY_NUMBERS'


export default function stringValidator (stringToValidate: string, validationMethod: ValidationMethods): boolean {

    let requiredMethod = chooseRegExpMethod(validationMethod)
    if(!requiredMethod) {

        throw new Error('Choosen method is not valid.')
    }

    return requiredMethod.test(stringToValidate)

}



export function chooseRegExpMethod (chosenMethod: ValidationMethods): RegExp | undefined {

    return allRegExp[chosenMethod]

}