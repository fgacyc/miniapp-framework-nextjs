import Block from "@/components/block";
import NavBar from "@/components/nav-bar";
import {Input, Switch} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {useSettingsStore} from "@/store/settings-store";

export default function Settings() {
    const [isDarkMode,toggleDarkMode] = useSettingsStore(state => [state.isDarkMode,state.toggleDarkMode]);
    const [radioValue,setRadioValue] = useSettingsStore(state => [state.radioValue,state.setRadioValue])
    const [inputValue,setInputValue] = useSettingsStore(state => [state.inputValue,state.setInputValue])

    return (
        <div className={"h-screen"}>
            <NavBar>Settings</NavBar>
            <Block title={undefined}>
                <div className={"py-2 flex flex-row justify-between items-center"}>
                    <div className={"text-base"}>Dark Mode</div>
                    <Switch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                            aria-label="Automatic updates"/>
                </div>
            </Block>

            <Block title={undefined}>
                <RadioGroup
                    label="Select one item"
                    value={radioValue}
                    onValueChange={setRadioValue}
                >
                    <Radio value="buenos-aires">Item1</Radio>
                    <Radio value="sydney">Item2</Radio>
                    <Radio value="san-francisco">Item3</Radio>
                </RadioGroup>
            </Block>

            <Block title='Input'>
                <Input type="text"
                    value={inputValue}
                    onValueChange={(val) => setInputValue(val)}
                     label="text" placeholder=""/>
            </Block>
        </div>
    )
}