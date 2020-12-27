import css from './css.mjs';
import addCssToHead from './add_css_to_head.mjs';
import collectionToArray from './collection_to_array.mjs';
import indexArrayOfLength from './index_array_of_length.mjs';

const createElements = (className, size) => {
  const container = document.createElement('div');
  container.classList.add(className);

  indexArrayOfLength(size*size).forEach((v, i) => {
    container.append(document.createElement('div'));
    if ((i+1)%size == 0) container.append(document.createElement('br'));
  });

  const body = document.getElementsByTagName('body')[0];
  body.append(container);
}

const render = className => {
  const divs = collectionToArray(document.querySelectorAll('div.'+className+' > div'));
  return pixelData => {
    divs.forEach((div, i) => {
      div.style.backgroundColor = '#'+(0x1000000 + pixelData[i]).toString(16).slice(1);
    });
  };
};

const createRenderer = (size, identifier) => {
  const className = !identifier ? 'r1' : identifier ;
  addCssToHead(css(className));
  createElements(className, size)
  return render(className);
};

export default createRenderer;
