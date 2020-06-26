import { checkForNewspaper } from '../core';
import { enterSchool } from '../school';

export const goToSchool = () => {
    const newspaper = checkForNewspaper();

    read(newspaper);

    enterSchool('Me');

    return 'I am in school';
}

const read = (newspaper: string) => {
    return newspaper;
}
