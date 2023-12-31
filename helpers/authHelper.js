 import bcrypt from "bcrypt"


export const hashPassword = async(password) => {  //the pwd in argument here we r getting will pass on the register user hashpassword function in authController file
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }catch(error){
        console.log(error)
    }
};

export const comparePassword = async (password, hashedPassword) =>{
    return bcrypt.compare(password, hashedPassword)    
};