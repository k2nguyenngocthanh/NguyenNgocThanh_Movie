import { movieServ } from "../../Service/movieService"
import { CHI_TIET_PHONG_VE } from "./quanLyDatVeType";

export const layChiTietPhongVe=(maLichChieu)=>{
    return async dispatch =>{
        try{
            const result =await movieServ.layChiTietPhongVe(maLichChieu);
            console.log("result", result)
            if(result.status===200){
                dispatch({
                    type:CHI_TIET_PHONG_VE,
                    chiTietPhongVe:result.data.content
                })
            }
        }
        catch{
           
        }
    }
}