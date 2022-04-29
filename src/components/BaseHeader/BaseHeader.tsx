import React, { FC, useRef, useMemo, useState } from "react";
import Link from "next/link";
import MainContainer from "components/styles/general/MainContainer";
import SearchIcon from 'components/Icons/SearchIcon';
import useWindowSize from "src/hooks/useWindowSize";
import {
    MainHeaderBodyWrapper,
    MainHeaderTopSpace,
    MainHeader,
    MainHeaderBody,
    LogoContainer,
    UnVisibleLogo,
    VisibleLogo,
    MenuLogo,
    AnimateLogo,
    Title,
    MenuControls,
    MenuNav,
    MenuList,
    MenuItem,
    MenuLink,
    MenuSearch,
    MainHeaderContent,
    LogoBigContainer,
} from './style';
import { getPropertyStyleEl } from "src/utils/helpers";
const { motion, useTransform, useViewportScroll } = require("framer-motion");


const BaseHeader: FC = () => {
    const [startShowLogo, setStartShowLogo] = useState(false);
    const size = useWindowSize();
    const refMainHeaderBodyWrapper = useRef<HTMLDivElement>(null);
    const refMainHeaderBody = useRef<HTMLDivElement>(null);
    const refContainer = useRef<HTMLDivElement>(null);
    const refMenuLogoBigContainer = useRef<HTMLDivElement>(null);
    const refMenuLogoUnvisible = useRef<HTMLDivElement>(null);
    const refMenuLogo = useRef<SVGSVGElement>(null);
    const offsetY = useMemo(() => {
        const { current: bigContainer } = refMenuLogoBigContainer;

        if (bigContainer) {
            const marginTop = getPropertyStyleEl(bigContainer, 'margin-top');
            const marginBot = getPropertyStyleEl(bigContainer, 'margin-bottom');
            const endScrollPos = bigContainer.offsetHeight + marginTop + marginBot;

            return [0, endScrollPos];
        }
        return [0, 0];
    }, [ size ]);
    const { scrollY } = useViewportScroll();
    const yPos = useMemo(() => {
        const { current: refBody } = refMainHeaderBody;
        const { current: refBodyWrapper } = refMainHeaderBodyWrapper;
        const { current: refBigContainer } = refMenuLogoBigContainer;

        if (refBody && refBigContainer && refBodyWrapper) {
            if (!startShowLogo) {
                setStartShowLogo(true);
            }

            const bodyHeight = refBody.offsetHeight;
            const wrapperHeight = refBodyWrapper.offsetHeight;
            const bigContainerTopPos = refBigContainer.getBoundingClientRect().y + window.scrollY;
            const logoTop = bigContainerTopPos - (wrapperHeight - bodyHeight);

            return logoTop;
        }

        return 0;
    }, [ size, startShowLogo ]);
    const minScale = useMemo(() => {
        const { current: unvisibleEl } = refMenuLogoUnvisible;
        const { current: bigContainer } = refMenuLogoBigContainer;

        if (unvisibleEl && bigContainer) {
            return toFixed3(unvisibleEl.offsetWidth / bigContainer.offsetWidth);
        }
        return 0;
    }, [ size ]);
    const [maxScale, setMaxScale] = useState(1);
    const scale = useTransform(scrollY, offsetY, [maxScale, minScale]);
    const links = [
        {
            href: '/',
            text: 'Подборки',
        },
        {
            href: '/about',
            text: 'О нас',
        },
        {
            href: '/e',
            text: 'Подборки',
        },
        {
            href: '/q',
            text: 'Подборки',
        },
    ];
    const widthLogo = useMemo(() => {
        const { current } = refMenuLogoBigContainer;
        if (current) {
            return current.offsetWidth;
        }
        return null;
    }, [ size, refMenuLogoBigContainer ]);
    const y = useTransform(scrollY, offsetY, [yPos, 0]);

    function updateTransform(values: { y: number, scale: number }) {}

    function toFixed3(num: number) {
        return +(num.toFixed(3));
    }


    return (
        <>
            <MainHeader>
                <MainContainer ref={refContainer} withPadding>
                    <MainHeaderBodyWrapper ref={refMainHeaderBodyWrapper}>
                        <MainHeaderBody ref={refMainHeaderBody}>
                            <LogoContainer>
                                <UnVisibleLogo ref={refMenuLogoUnvisible}>
                                    <MenuLogo ref={refMenuLogo} />
                                </UnVisibleLogo>
                                <VisibleLogo>
                                    <AnimateLogo
                                        width={widthLogo}
                                        onUpdate={updateTransform}
                                        animate={startShowLogo ? { opacity: 1 } : null}
                                        transition={{ duration: 0.5 }}
                                        style={{ y, scale }}
                                    >
                                        <Link href="/" passHref>
                                            <Title>
                                                <MenuLogo />
                                            </Title>
                                        </Link>
                                    </AnimateLogo>
                                </VisibleLogo>
                            </LogoContainer>
                            <MenuControls>
                                <MenuNav>
                                    <MenuList>
                                        { links.map(link => (
                                            <MenuItem key={link.href}>
                                                <Link href={link.href} passHref>
                                                    <MenuLink className="text-general">
                                                        { link.text }
                                                    </MenuLink>
                                                </Link>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </MenuNav>
                                <MenuSearch>
                                    <SearchIcon />
                                </MenuSearch>
                            </MenuControls>
                        </MainHeaderBody>
                    </MainHeaderBodyWrapper>
                </MainContainer>
            </MainHeader>
            <MainContainer>
                <MainHeaderContent>
                    <LogoBigContainer ref={refMenuLogoBigContainer}>
                        <MenuLogo />
                    </LogoBigContainer>
                </MainHeaderContent>
            </MainContainer>
        </>
    )
}

export default BaseHeader;