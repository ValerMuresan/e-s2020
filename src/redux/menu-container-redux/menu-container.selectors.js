import { createSelector } from 'reselect';

const selectMenuContainer = state => state.menuContainer;
export const selectMenuContainerSections = createSelector(
    [selectMenuContainer],
    menuContainer => menuContainer.sections
)