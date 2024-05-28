import type { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { BsChevronLeft } from 'react-icons/bs';
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface PropsWithChildrenAndArrow extends PropsWithChildren<object> {
    ifShowBackArrow?: boolean;
}

export default function NavBar({ children, ifShowBackArrow = true }: PropsWithChildrenAndArrow) {
    const router: AppRouterInstance = useRouter();

    return (
        <>
            <div className={"h-[45px] px-3 flex items-center justify-between bg-white"}>

                <div onClick={() => router.back()} className={"cursor-pointer"}>
                    {ifShowBackArrow && <BsChevronLeft className={"h-6 w-6"}/>}
                </div>
                <div className={"text-lg"}>{children}</div>
                <div className={"h-6 w-6"}></div>
            </div>
        </>
    );
}