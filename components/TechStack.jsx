import Image from "next/image";
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
  } from "@/components/ui/tooltip";


export const TechStack = ({size, name, location="/assets/skills/icons" }) => {
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger>
                    <Image
                        width={size}
                        height={size}
                        src={`${location}/${name}.svg`}
                        alt="HTML5"
                        className="h-fit m-2"
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p className="capitalize">{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TechStack