import * as Icons from '../icons';
export default function IconBox({icontype, icon="HealthIcon", color="#fff"}){
    const IconComponent = Icons[icon];
    return(
        <div className="icon_box">
            {icontype == "image" && <img src={icon} alt=""/>}
            {icontype != "image" && <IconComponent color={color} />}
        </div>
    )
}