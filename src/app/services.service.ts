import { Injectable } from '@angular/core';
import { IItem } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  arrBuys: IItem[] = [];
  buyStatus = 'в корзину';
  isBasketModal = false;
  isBuy = false;
  isAddBasket = true;
  arrItems: IItem[] = [
    {
      id: 1,
      model: 'Samsung',
      name: "Galaxy S23 Ultra",
      price: 1500,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/9Qc42b7PcbOtzC8DFfXdjykYWIJUtHz2JIYvXmTR.jpg',
      isBuy: false,
    },
    {
      id: 2,
      model: 'Samsung',
      name: "Galaxy S21 FE 5G",
      price: 600,
      qty: 10,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/HSEiQRPo7YqkxzKsWqseM7rFxNY6f21VpL8ouNHj.jpg',
      isBuy: false,
    },
    {
      id: 3,
      model: 'Samsung',
      name: "Galaxy S23",
      price: 1000,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/9Qc42b7PcbOtzC8DFfXdjykYWIJUtHz2JIYvXmTR.jpg',
      isBuy: false,
    },
    {
      id: 4,
      model: 'Samsung',
      name: "Galaxy S22 Ultra",
      price: 1300,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/HSEiQRPo7YqkxzKsWqseM7rFxNY6f21VpL8ouNHj.jpg',
      isBuy: false,
    },
    {
      id: 5,
      model: 'Samsung',
      name: "Galaxy S21",
      price: 750,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/9Qc42b7PcbOtzC8DFfXdjykYWIJUtHz2JIYvXmTR.jpg',
      isBuy: false,
    },
    {
      id: 6,
      model: 'Samsung',
      name: "Galaxy S22+",
      price: 1200,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/HSEiQRPo7YqkxzKsWqseM7rFxNY6f21VpL8ouNHj.jpg',
      isBuy: false,
    },

    {
      id: 7,
      model: 'Samsung',
      name: "Galaxy S20 Ultra",
      price: 300,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/9Qc42b7PcbOtzC8DFfXdjykYWIJUtHz2JIYvXmTR.jpg',
      isBuy: false,
    },
    {
      id: 8,
      model: 'Samsung',
      name: "Galaxy S21 Ultra",
      price: 900,
      qty: 3,
      characteristics: `Частота процессора 2.9 ГГц, 2.8 ГГц, 2.2 ГГц. Тип процессора: Восьмиядерный.`,
      cover: '../../../assets/images/HSEiQRPo7YqkxzKsWqseM7rFxNY6f21VpL8ouNHj.jpg',
      isBuy: false,
    },


  ]
  addBasket(item: IItem) {
    const newItem: IItem = {
      id: item.id,
      model: item.model,
      name: item.name,
      price: item.price,
      qty: 1,
      characteristics: item.characteristics,
      cover: item.cover,
      isBuy: true
    }
    this.arrItems.forEach(elem => {
      if (elem.id === item.id) {
        elem.isBuy = true;
      }
    })
    this.arrBuys.push(newItem);
  }

  totalPrice() {
    let result = 0;
    this.arrBuys.forEach(elem => {
      result += (elem.price * elem.qty)
    })
    return result;
  }

  clearBuys() {
    this.arrBuys = [];
    this.isBasketModal = false;
    this.arrItems.forEach(elem => {
      elem.isBuy = false;
    })
  }
  buyItems() {
    let result: string = '';
    this.arrBuys.forEach(elem => {
      result += `
      Вы заказали нижеперечисленные устройства:
      модель - ${elem.name}
      цена - ${elem.price}
      заказанное кол-во - ${elem.qty} \n`
    })
    result += `
      Total Price - ${this.totalPrice()}`;
    alert(result);
    this.clearBuys();
  }
}
