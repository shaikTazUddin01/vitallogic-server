import { Auth } from '../module/Auth/auth.model';
import { IAuth } from '../module/Auth/auth.interface';


export async function createAdminIfNotExists() {
    const adminExists = await Auth.findOne({ role: 'Admin' });

    if (!adminExists) {
        const adminData: IAuth = {
            name: 'Jasmin',
            email: 'admin@gmail.com',
            number: 1234567890,
            address:'jes,usa',
            password: '12345',
            role: 'Admin',
        };


        
        await Auth.create(adminData);
      
    } 
}