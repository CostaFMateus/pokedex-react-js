import styled from "styled-components"

export const Spacing = styled.div`
    width: 100%;
    ${({
    $top = 0,
    $bottom = 0,
    $rigth = 0,
    $left = 0
}) => `
    margin-top : ${$top}px;
    margin-bottom : ${$bottom}px;
    margin-rigth : ${$rigth}px;
    margin-left : ${$left}px;
`
}`