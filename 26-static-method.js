class Car{
    constructor( model, engine, color ){
        this.model = model,
        this.engine = engine,
        this.color = color
    }
    showCar(){
      console.log(`This car - ${this.model} with ${this.engine} and ${this.color} color`);
    }
    // === static method
    static mergeComments(first, second){
      return `${first} ${second}`
    }
  }
  // const nextCar = new Car ('Volvo', '2lit.', 'grey' )
  // console.log(nextCar.showCar());

  Car.mergeComments('First comment', 'Second comment')

