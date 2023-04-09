let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    speed: 120,
    showInfo: function() {
      console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`);
    }
  };
  
  let location = {
    city: 'Київ',
    distance: 500
  };
  
  function showTime() {
    let time = location.distance / car.speed;
    console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${location.city} за ${time} годин`);
  }
  
  car.showInfo();
  showTime();
  