// ---> Singleton - class , який створ. тільки 1 екземпляр, навіть, якщо ми робимо 2 екземпляри, вони посилаються на 1 об'єкт, вони рівні між собою
const Singleton = (function() {
  let instance

  function createInstance() {
    let object = new Object('i am rhe instance')
    return object
  }
  return {
    getInstance:function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})();
(function run() {
  let instance1 = Singleton.getInstance()
  let instance2 = Singleton.getInstance()
  console.log('Same instance? ' + ( instance1 === instance2 ));
 })()
