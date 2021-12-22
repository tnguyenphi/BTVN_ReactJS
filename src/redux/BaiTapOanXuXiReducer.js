const stateDefault = {
    mangDatCuoc:[
        {ma:'keo', hinhAnh: './gameOanXuXi/keo.png',datCuoc:true},
        {ma:'bua', hinhAnh: './gameOanXuXi/bua.png',datCuoc:false},
        {ma:'bap', hinhAnh: './gameOanXuXi/bao.png',datCuoc:false},
    ],
    ketQua: 'I am Iron Man, I love u 3000',
    soBanThang: 0,
    soBanChoi: 0,
    computer:{ma:'keo', hinhAnh: './gameOanXuXi/keo.png'},
}

const BaiTapOanXuXiReducer = (state=stateDefault, action) => {

    switch(action.type){
        
    }
}