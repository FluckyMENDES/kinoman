import Abstract from '../views/abstract/abstract';

export const renderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

export const render = (container, child, place) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case renderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case renderPosition.BEFOREEND:
      container.append(child);
      break;
    default:
      container.append(child);
      break;
  }
};

export const renderTemplate = (container, template, place = `beforeend`) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if ((parent === null, oldChild === null, newChild === null)) {
    throw new Error(`Can't replace unexisting elements.`);
  }

  parent.replaceChild(newChild, oldChild);
};

export const remove = (component) => {
  if (!component instanceof Abstract) {
    throw new Error('Can remove only comonents');
  }
  component.getElement().remove();
  component.removeElement();
};
