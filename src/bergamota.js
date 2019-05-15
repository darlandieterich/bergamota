var B = function(args) {
    // Constructor
    if (this.__proto__.constructor !== B) {
        return new B(args);
    }

    // Query selector
    this.element = document.querySelector(args);
    
    // Methods
    // To set html
    this.h = function(v) {
        this.element.innerHTML = v;
    }
    // To set value
    this.v = function(v) {
        this.element.value = v;
    }
    // To set text
    this.t = function(v) {
        this.element.innerText = v;
    }
};

module.exports = B;