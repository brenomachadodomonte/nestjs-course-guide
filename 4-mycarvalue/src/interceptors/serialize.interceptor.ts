import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map, Observable } from "rxjs";
import { UserDto } from "src/user/dto/user.dto";

export class SerializeInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // Run something before a request is handled
        // by the request handler

        return next.handle().pipe(
            map((data: any) => {
                // Run something before the response is sent out
                return plainToClass(UserDto, data, {
                    excludeExtraneousValues: true
                })
            })
        );
    }

}
