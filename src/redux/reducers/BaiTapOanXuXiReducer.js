const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './gameOanXuXi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './gameOanXuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './gameOanXuXi/bao.png', datCuoc: true },
    ],
    ketQua: 'I am Iron Man, I love u 3000',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './gameOanXuXi/bao.png' },
}

const BaiTapOanXuXiReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            //reset mang cuoc
            let mangCuocUpdate = [...state.mangDatCuoc];
            //tao ra mang cuoc moi tu mang cuoc cu va action do nguoi dung truyen len
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            console.log("mangCuocUpdate", mangCuocUpdate);
            //tim ra ma cuoc de thay doi trang thai cuoc ung voi ma cuoc do
            // let index = mangCuocUpdate.findIndex(qc=>qc.ma === action.maCuoc);
            // if(index !== -1 ){
            //     mangCuocUpdate[index].datCuoc = true;
            // }
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }
        case "RAN_DOM": {
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state };
        }
        case "END_GAME": {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Bạn Thua sml';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'I am Iron man, i love u 3000';
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'I am Iron man, i love u 3000';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else {
                        state.ketQua = 'Bạn Thua sml';
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Bạn Thua sml';
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = 'I am Iron man, i love u 3000';
                    } else {
                        state.ketQua = 'Hòa nhau !!!';
                    }
                    break;
                default:
                    state.soBanThang += 1;
                    state.ketQua = 'I am Iron man, i love u 3000';
                return { ...state };
            }
            state.soBanChoi += 1;
            return { ...state };
        }
        default: return { ...state }
    }
}
export default BaiTapOanXuXiReducer;