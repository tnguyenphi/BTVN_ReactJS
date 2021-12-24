import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType";


const stateDefault = {
    danhSachGheDangDat: [

    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                //ghe dang dat da co trong mang khi nguoi dung click vo => remove
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        }
        break;
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                //ghe dang dat da co trong mang khi nguoi dung click vo => remove
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return { ...state }
    }

}

export default BaiTapDatVeReducer