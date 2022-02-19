import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Injectable()
export class CurrentUserInteceptor implements NestInterceptor {

    constructor(private userService: UserService){}

    async intercept(context: ExecutionContext, next: CallHandler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session || {};

        if(userId) {
            const user = await this.userService.findOne(userId);
            request.currentUser = user;
        }

        return next.handle();
    }
}