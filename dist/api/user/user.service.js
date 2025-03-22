"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    SHEETDB_URL = 'https://sheetdb.io/api/v1/v405cupumvutv';
    async createUser(body) {
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
            const responseData = await response.json();
            if (response.status !== 201) {
                return {
                    success: false,
                    message: 'Failed to create user'
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
                message: 'Failed to create user'
            };
        }
    }
    async getUser(id) {
        try {
            const response = await fetch(`${this.SHEETDB_URL}/search?userId=${id}`);
            if (response.status !== 200) {
                return {
                    success: false,
                    message: 'Failed to get user'
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
                message: 'Failed to get user'
            };
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map