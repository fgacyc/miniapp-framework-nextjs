import config from "../../package.json";
import {GoChevronRight} from "react-icons/go";
import Block from "@/components/block";
import NavBar from "@/components/nav-bar";
import Image from "next/image";
import {capitalizeAllFirstLetters} from "@/components/tools";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/store/use-store";

export default function About() {
    const { t } = useTranslation();
    const router = useRouter();
    const lang = useUserStore(state => state.language);

    return (
        <div className={"h-screen"}>
            <NavBar>{t("About")}</NavBar>
            <div className={"flex flex-col items-center p-8 bg-white mb-2"}>
                <Image src="/app_icon.png" alt="app logo" width={64} height={64} className={"rounded-full"} />
                <h1 className={"text-black text-xl text-center mt-4"}>
                    {
                        lang === 'zh' && config.name_zh
                    }
                    {
                        lang === 'en' && capitalizeAllFirstLetters(config.name)
                    }
                </h1>
            </div>

            <Block title={undefined}>
                <div className={"flex justify-between items-center"}>
                    <div>{t("Version")}: V{config.version}</div>
                    <div className={"bg-gray-100 px-1 py-[1px] rounded text-gray-600"}>
                        {t("Latest Version")}
                    </div>
                </div>
            </Block>

            <Block title={undefined}>
                <div className={"flex justify-between items-center"}>
                    <div>{t("Developer")}: {config.author}</div>
                    <div className={"flex"}>
                        {
                            config.instagram && <a href={config.instagram} className={"px-2"}>
                                <Image src={'/instagram.png'} alt="instagram" width={24} height={24} />
                            </a>
                        }
                        {
                            config.github && <a href={config.github} target={"_blank"}>
                                <Image src={'/github.png'} alt="github" width={24}  height={24} />
                            </a>
                        }

                    </div>
                </div>
            </Block>

            <Block title={undefined}>
                <div className={"pb-2 flex flex-row justify-between  items-center"}
                    onClick={() => router.push('/terms-of-service')}
                >
                    <div>{t("Terms of Service")}</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
                <hr/>
                <div className={"pt-2 flex flex-row justify-between items-center"}
                        onClick={() => router.push('/privacy-policy')}
                >
                    <div>{t("Privacy Policy")}</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
            </Block>
        </div>
    )
}