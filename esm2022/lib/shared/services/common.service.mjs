import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CommonService {
    constructor() {
        this.objectByKeys = (obj, keys) => keys.reduce((aux, key) => {
            if (obj[key] !== undefined)
                aux[key] = obj[key];
            return aux;
        }, {});
    }
    capitalizeFirstWord(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: CommonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: CommonService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: CommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3ZhZnJhbWV3b3JrL3NyYy9saWIvc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCO1FBTVMsaUJBQVksR0FBRyxDQUFDLEdBQWMsRUFBRSxJQUFjLEVBQUUsRUFBRSxDQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBYyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVM7Z0JBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQVZRLENBQUM7SUFFakIsbUJBQW1CLENBQUMsT0FBZTtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxRSxDQUFDOzhHQU5VLGFBQWE7a0hBQWIsYUFBYSxjQUZaLE1BQU07OzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW55T2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMvY29tbW9ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgY2FwaXRhbGl6ZUZpcnN0V29yZChwYWxhYnJhOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcGFsYWJyYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhbGFicmEuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJlYWRvbmx5IG9iamVjdEJ5S2V5cyA9IChvYmo6IEFueU9iamVjdCwga2V5czogc3RyaW5nW10pID0+XG4gICAga2V5cy5yZWR1Y2UoKGF1eDogQW55T2JqZWN0LCBrZXkpID0+IHtcbiAgICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSBhdXhba2V5XSA9IG9ialtrZXldO1xuICAgICAgcmV0dXJuIGF1eDtcbiAgICB9LCB7fSlcbn1cbiJdfQ==