"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_quard_1 = require("../guards/jwt.quard");
const Auth = () => (0, common_1.UseGuards)(jwt_quard_1.JwtAuthGuard);
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map