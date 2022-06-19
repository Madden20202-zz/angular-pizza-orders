export class PizzaOrder {

    //These are the new variables to have the info transfered to
    private orderId: number
    private size: string
    private crust: string
    private topping: string

    constructor(orderId: number, size: string, crust: string, topping: string) {
        this.orderId = orderId
        this.size = size
        this.crust = crust
        this.topping = topping
    }

    getOrderId(): number {
        return this.orderId
    }

    getOrder() {
        return this.crust, this.size, this.topping
    }
}