import React from 'react'
import { ExternalLinkIcon } from "lucide-react";
import {Link} from "react-router-dom";

import projectsData from "./projectsData.json";
export const techIcons = {
  "HTML" : { name: "HTML", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E34F26]">
        <path fill="currentColor" d="M1.5 0L0 3h3L2 12h4l1.5-3h5l1.5 3h4l1.5-3h4l1.5-3h-6.75L21 0H1.5z" />
      </svg>
    ) 
  },
  "CSS": {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path
          fill="#1572B6"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
        />
      </svg>
    )
  },
  "Javascript": {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path
          fill="#F7DF1E"
          d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
        />
      </svg>
    )
  }
,
  "Tailwind": {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#06B6D4]">
        <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
  },
  "React": {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#61DAFB]">
        <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  "NodeJS": {
    name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path
            fill="#339933"
            d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
          />
        </svg>
      )


  },
  "MongoDB": { name: "MongoDB",   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg>
        ),
  },
  "Express" :{
    name: "Express.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#000000" d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
      </svg>
    )
    
  },
  "MaterialUI" : {
    name: "Material UI",
icon: (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#007FFF" d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L12 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"/>
  </svg>
)
  },
  "Git":{ name: "Git", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F05032]">
        <path fill="currentColor" d="M12 0c-1.456 0-2.829.451-3.93 1.218l-.052.035-1.838 1.108c-.303.183-.54.426-.76.633l-1.367 1.276c-.67.626-1.074 1.482-1.074 2.33s.404 1.704 1.074 2.33c.146.134.269.292.387.463l.652.764c-.009.055-.023.109-.023.164 0 1.139.532 2.097 1.348 2.61l.213.107c.182.09.372.139.564.139h2.004c.397 0 .789-.107 1.126-.3l2.161-1.177c.689.428 1.634.714 2.579.714 2.256 0 4.084-1.57 4.084-3.5s-1.828-3.5-4.084-3.5c-.571 0-1.093.126-1.582.317L10.5 6.905c.055-.297.09-.601.09-.903 0-.772-.097-1.527-.284-2.259-.396-.006-.81-.033-1.208.047-.715.125-1.45.54-2.022 1.07-.716.691-1.083 1.617-1.083 2.52v3.118c-.577-.183-1.275-.294-1.953-.294-2.257 0-4.084 1.569-4.084 3.5 0 1.403.701 2.637 1.763 3.441l1.138 1.025 2.097-1.096c.211-.115.469-.147.726-.082 0 0 .092.044.235.097l.087.035c-.004.025-.007.052-.007.077v1.057c0 1.93 1.828 3.5 4.084 3.5 1.007 0 1.957-.394 2.664-1.063.555.496 1.303.832 2.059.832h2.004c.486 0 .975-.052 1.453-.139.389-.03.684-.172.972-.372.473-.317.822-.775 1.069-1.283l-2.111-1.44c-.143-.095-.34-.077-.473.027l-.588.5c-1.207 1.041-2.993 1.008-4.174-.042-.358-.283-.549-.679-.549-1.086v-3.047l2.82-1.716c.236-.147.528-.173.794-.073L16.5 11l.5-1-1.5-1-1 1 .5.5-2.5 1.5-1.5-1 1-1-1-1.5c-1.065-.627-2.294-.583-3.21.182-.807.716-1.254 1.568-1.254 2.557 0 2.448 2.445 4.5 5.5 4.5 1.02 0 2.04-.167 3-.496l-.238-.464c-.494-.983-.958-1.782-1.397-2.473-.458-.667-1.129-1.094-1.838-1.094-.89 0-1.703.392-2.23 1.021-.232.24-.398.517-.5.83-.102.312-.095.627-.012.932.27 1.092.947 1.556 1.851 1.556.43 0 .878-.075 1.224-.231 0 0 2.127-1.113 2.73-1.393l1.04 2.097c.059.117.122.234.199.346.174.235.465.465.81.487.032 0 .063.005.096.005h.01c.021 0 .046-.004.075-.004.354-.034.678-.227.871-.53.191-.297.251-.646.151-.994-.045-.156-.101-.308-.161-.458l.943-1.5c.05-.084.078-.182.078-.278 0-.372-.168-.743-.482-.956-.185-.137-.388-.191-.575-.239.232-.126.468-.245.707-.366.052-.027.099-.063.152-.085 1.3-.647 2.608-1.277 4.23-1.277.194 0 .393.015.594.042 1.362.104 2.478.679 3.11 1.542.082.157.155.306.231.469 0 .006.005.013.008.02.43.82 1.293 1.295 2.251 1.295 1.306 0 2.321-.815 2.321-2.024 0-1.203-1.147-1.828-2.321-1.828-.949 0-1.876.224-2.767.633-1.653.666-3.021 1.883-3.021 3.128z" />
      </svg>
    )
  },
"Redux": {
    name: "Redux",
    icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path 
                fill="#764ABC" 
                d="M16.637 16.076c.836-.958 1.416-2.165 1.608-3.461.192-1.296-.025-2.61-.622-3.765.212.462.348.958.389 1.464.066 1.048-.211 2.101-.786 2.974-.275.42-.618.789-1.012 1.098-.42.333-.9.583-1.402.737a5.15 5.15 0 0 1-3.009.024 4.963 4.963 0 0 1-1.677-.95 5.24 5.24 0 0 1-1.363-1.678c-.317-.617-.496-1.3-.526-1.998a4.573 4.573 0 0 1 .337-1.977 5.12 5.12 0 0 1 1.15-1.751c.52-.521 1.15-.925 1.847-1.177a5.281 5.281 0 0 1 2.21-.295c.761.064 1.496.305 2.14.703a4.87 4.87 0 0 1 1.578 1.602c.192.296.344.62.454.956.168.528.253 1.08.252 1.635-.003 1.093-.352 2.166-1 3.074-.324.46-.737.858-1.211 1.172z"
            />
            <path 
                fill="#FFFFFF" 
                d="M12 9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"
            />
            <path 
                fill="#764ABC" 
                d="M9.75 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0z"
            />
        </svg>
    )
},
"MySQL": {
    name: "MySQL",
    icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path 
                fill="#4479A1" 
                d="M12 6c-5.178 0-9.378 1.609-9.378 3.6 0 1.99 4.2 3.6 9.378 3.6s9.378-1.61 9.378-3.6c0-1.991-4.2-3.6-9.378-3.6z"
            />
            <path 
                fill="#3465A4" 
                d="M12 10.8c-5.178 0-9.378 1.61-9.378 3.6v1.2c0 1.99 4.2 3.6 9.378 3.6s9.378-1.61 9.378-3.6v-1.2c0-1.99-4.2-3.6-9.378-3.6z"
            />
            <path 
                fill="#4479A1" 
                d="M12 16.8c-5.178 0-9.378-1.61-9.378-3.6v1.2c0 1.99 4.2 3.6 9.378 3.6s9.378-1.61 9.378-3.6v-1.2c0 1.99-4.2 3.6-9.378 3.6z"
            />
            <ellipse 
                cx="12" 
                cy="6" 
                rx="9.378" 
                ry="2.4" 
                fill="#3465A4" 
            />
        </svg>
    )
}
};



const ProjectCard = ({project}) => {
  return (
    <div className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>

        <div >
          <img
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="h-48 w-full object-cover"
          />
        </div>

        <div className='bg-projectcardbg p-4'>
          <h3 className='text-xl text-white font-bold'>{project.title}</h3>
          <p className='mt-2 h-11 text-sm text-[#E4E4E7]'>{project.description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.techStack.map((tech)=>
            (
              <div
              key={tech}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              title={techIcons[tech]?.name}
            >
              {techIcons[tech]?.icon}
            </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
               <Link
               to={project.live}
               className="inline-flex items-center justify-center rounded-md bg-pink px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-pink/50 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
               target="_blank"
            rel="noopener noreferrer">
                          <ExternalLinkIcon className="mr-2 h-4 w-4" />
                 Live Site
               </Link>

               <Link
            to={project.github}
            className="inline-flex items-center justify-center rounded-md  bg-pink text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-black/60 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <span className="mr-2 h-4 w-4 text-white"> <i className="fa-brands fa-github"></i> </span>
            GitHub
          </Link>
          </div>
        </div>
      
    </div>
  )
}

export default ProjectCard