import { environment } from '../../environments/environment';
export class URL{
    //    public static API_ENDPOINT="http://ec2-52-70-94-242.compute-1.amazonaws.com:8080/core/api/v1";
    public static API_ENDPOINT=environment.apiUrl;
    public static supportLogin=URL.API_ENDPOINT+"/"+"user"+"/"+"supportUserLogin";
}
