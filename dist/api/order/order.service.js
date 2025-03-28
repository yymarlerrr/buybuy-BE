"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
let OrderService = class OrderService {
    SHEETDB_URL = 'https://sheetdb.io/api/v1/gyrq3n0lee40i';
    async getOrderByUserId(id) {
        try {
            const response = await fetch(`${this.SHEETDB_URL}/search?userId=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200) {
                return {
                    success: false,
                    message: 'Failed to get orders'
                };
            }
            return {
                success: true,
                data: await response.json()
            };
        }
        catch (error) {
            console.log(error);
            return {
                success: false,
                message: 'Failed to get orders'
            };
        }
    }
    async createOrder(body) {
        try {
            const response = await fetch(this.SHEETDB_URL, {
                method: 'POST',
                body: JSON.stringify({
                    data: [body]
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 201) {
                return {
                    success: false,
                    message: 'Failed to create order'
                };
            }
            return {
                success: true
            };
        }
        catch (error) {
            console.log(error);
            return {
                success: false,
                message: 'Failed to create order'
            };
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
//# sourceMappingURL=order.service.js.map