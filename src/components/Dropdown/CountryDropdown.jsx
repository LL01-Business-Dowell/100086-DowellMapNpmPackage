import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { useQuery } from "react-query";
import FetchCountries from "../../data/fetchCountries";
import { useState } from "react";
import styles from "./style.module.css"

export default function CountryDropdown() {
    // const { data } = useQuery({
    //     queryFn: async () => FetchCountries("e0ab32cf-7bd2-47e7-b2af-2448262ec41e"),
    //     queryKey: 'countries'
    // }, [])
    const data = {"data":[{"countries":["hungary","azerbaijan","runion","vaticancity","egypt","newcaledonia","wallisandfutunaislands","spain","cuba","costarica","sanmarino","sudan,therepublicof","pakistan","saba","anguilla","dominica","ethiopia","cameroon","morocco","niue","iraq","congo,democraticrepublicofthe","belarus","unitedstates","vietnam","sainthelena","mayotte","andorra","burundi","zimbabwe","tajikistan","yap","nicaragua","bonaire","italy","maldives","sierraleone","indonesia","saintbarthlemy","uganda","croatia","algeria","venezuela,bolivarianrepof","madagascar","pitcairnislands","malaysia","congo","chile","unitedarabemirates","saudiarabia","burkinafaso","curaao","guinea","laopeoplesdemrep","southgeorgiaandthesouthsandwichislands","nepal","equatorialguinea","greece","benin","malta","kuwait","swaziland","paraguay","switzerland","gambia","estonia","greenland","chuuk","india","kazakhstan","tanzania,unitedrepublicof","cambodia","macedonia,theformeryugoslavrepof","caymanislands","americansamoa","turkmenistan","cookislands","kiribati","vanuatu","poland","bermuda","uruguay","slovakia","norway","france","guineabissau","jordan","frenchguiana","newzealand","christmasisland","serbia","honduras","togo","britishvirginislands","samoa","antarctica","latvia","panama","iceland","monaco","frenchsouthernandantarcticlands","centralafricanrepublic","thailand","syrianarabrepublic","mali","iran,islamicrepof","saotomeandprincipe","liechtenstein","gibraltar","afghanistan","turksandcaicosislands","marshallislands","philippines","norfolkisland","southafrica","seychelles","hongkong,china","saintkittsandnevis","srilanka","guyana","southsudan,therepublicof","botswana","sintmaarten","djibouti","bangladesh","germany","myanmar","finland","tunisia","guam","elsalvador","belize","bolivia","aruba","qatar","martinique","portugal","guatemala","kyrgyzstan","somalia","ecuador","gabon","peru","mexico","tuvalu","oman","macau,china","frenchpolynesia","falklandislandsmalvinas","saintmartin","brazil","namibia","romania","russianfederation","bruneidarussalam","argentina","australia","uzbekistan","antiguaandbarbuda","israel","zambia","barbados","grenada","nigeria","countries_list","westernsahara","puertorico","bosniaandherzegovina","sweden","timorleste","niger","solomonislands","pohnpei","japan","chad","faeroeislands","montenegro","china","lesotho","westbankandgazastrip","montserrat","denmark","fiji","taiwan,china","unitedkingdom","suriname","guadeloupe","korea,republicof","guernsey","slovenia","mongolia","mauritania","moldova,republicof","tonga","saintvincentandthegrenadines","eritrea","canada","turkey","kosrae","angola","virginislandsus","saintpierreandmiquelon","cyprus","ireland","haiti","bulgaria","bahrain","nauru","ctedivoire","luxembourg","rwanda","isleofman","jersey","kosovo","mozambique","mauritius","austria","bahamas","northernmarianaislands","sinteustatius","trinidadandtobago","yemen","papuanewguinea","svalbardandjanmayen","singapore","cocoskeelingislands","tokelau","netherlands","albania","palau","capeverde","ghana","libyanarabjamahiriya","saintlucia","armenia","comoros","senegal","jamaica","kenya","czechrepublic","lithuania","ukraine","georgia","malawi","colombia","liberia","lebanon","dominicanrepublic","bhutan","korea,dempeoplesrepof","belgium","countries_list","countries_list"]}]}

    const [country, setCountry] = useState();
    // console.log(data?.data?.data[0]?.countries)
    console.log(data?.data[0]?.countries)

    const countries_ = data?.data[0]?.countries;
    return (
        <div className={styles.dropdownContainer}>
            <Dropdown
                onChange={(e) => setCountry(e.value)}
                options={countries_?.map((item) => item)}
                value={country}
                controlClassName={styles.controlClassName}
                className={styles.dropdownStyle}
                menuClassName={styles.menuClass}
                placeholder={"Select Country"}
                placeholderClassName={styles.placeholderClassName}

                arrowClosed = {
                    <LiaAngleRightSolid
                    size={12}
                    // style={{paddingLeft:10}}
                    color="white"/>
                }
                arrowOpen ={
                    <LiaAngleDownSolid
                    size={12}
                    color="white"/>
                }

            />
        </div>
    );
}


