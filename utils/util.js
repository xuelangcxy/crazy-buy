import { RICH_MEN } from './constants';

export function formatPrice(number) {
  const aIntNum = number.toString().split('.');
    const iFlootPart = aIntNum.length > 1 ? `.${aIntNum[1]}` : '';
    const rgx = /(\d+)(\d{3})/;
    let iIntPart = aIntNum[0];

    if (iIntPart.length >= 5) {
      while (rgx.test(iIntPart)) {
        iIntPart = iIntPart.replace(rgx, '$1,$2');
      }
    }
    return iIntPart + iFlootPart;
}

export function getNameByLabel(label) {
  let name = '';
  RICH_MEN.forEach(item => {
    if (item.name_en === label) {
      name = item.name;
    }
  });
  return name;
}