import * as C from './styles';
import { ReactComponent as LogoHeader } from '../../svgs/logo-vms-header.svg';
import { ReactComponent as English } from '../../svgs/english.svg';
import { ReactComponent as Moon } from '../../svgs/moon.svg';

// type Props = {
//     active: boolean,
// }


export const Header = () => {
    return (
        <C.Container>
            <C.Content>
                <C.Logo>
                    <LogoHeader/>
                    <h1>vitor m. siqueira</h1>
                </C.Logo>

                <C.Sections>
                    
                    <C.TitleSection active={true}>Home</C.TitleSection>
                    <C.TitleSection active={false}>About</C.TitleSection>
                    <C.TitleSection active={false}>Experience</C.TitleSection>
                    <C.TitleSection active={false}>Portfolio</C.TitleSection>
                    <C.TitleSection active={false}>Contact</C.TitleSection>
                </C.Sections>

                <C.Config>
                    <English/>
                    <Moon/>
                </C.Config>
            </C.Content>

            <C.Backdrop/>
        </C.Container>
    );
}