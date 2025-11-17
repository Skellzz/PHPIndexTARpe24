//sirge joon
function sirgeJoon() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        // anname tahvli nimi on t
        //joon
        t.beginPath();
        t.strokeStyle = "red";
        t.lineWidth = 1;
        t.moveTo(20, 80);
        //alguspunkt
        t.lineTo(50, 30);
        //lõpppunkt
        t.stroke();
    }
}
//kolmnurk
function kolmnurk() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        // anname tahvli nimi on t
        //kolmnurk
        t.beginPath();
        t.strokeStyle = "red";
        t.fillStyle = "red";
        //taust
        t.lineWidth = 1;
        t.moveTo(50, 100);
        //alguspunkt
        t.lineTo(150, 100);
        t.lineTo(150, 200);
        t.lineTo(50, 100);
        //lõpppunkt
        t.stroke();
        t.fill();
    }
}
function puhasta() {
    const tahvel = document.getElementById("tahvel");
    let t = tahvel.getContext("2d");
    t.clearRect(0, 0, 300, 250);
    // 0,0 -vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus
}
//ring
function ring() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");
    let r = document.getElementById("raadius");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        // anname tahvli nimi on t
        //ümberjoon
        t.beginPath();
        t.strokeStyle = "green";
        t.lineWidth = 1;
        t.arc(150, 50, 100, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        //ring
        t.beginPath();
        t.fillStyle = "green";
        t.lineWidth = 1;
        t.arc(50, 120, r.value, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();

    }
}
function ristkylik() {
    const tahvel = document.getElementById("tahvel");
    let laius = document.getElementById("laius");
    let korgus = document.getElementById("korgus");
    let t = tahvel.getContext("2d");
    t.fillStyle = "yellow";
    t.fillRect(50, 30, laius.value, korgus.value);
    // 0,0 -vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus
}
function pilt() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        const fail = new Image();
        fail.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB4FBMVEX////r6+vq6ur+/v7ZRk7p6en5+fn09PTv7+/29vb6+vru7u7eR0/1wzf6xzf4/f2fJSyWO0CCKS+HMUL+yjebMjnLzs7cP0inpqbFPUXHNDyhgoSora2trKy7vr+6ublvdnelnp/b29vDw8PS0tKkhjbvvzexkDayNz6amZnDoDW1kza0s7PBwcHesjfmuDeQj5CihDYdU5PAmzaPO0J+fH3TqjeFjY1xb3CKiImWezbMz9bGOkzUOUKaaTsATpfisiKQdzacUFSZdHatnp+4LTaahVZ5ZzyanaaojEfCmirMoR9/ZyShlHmSgl+opaCQbwCCbTU4SmaxOkiYW16NYmRIRkeYTUGOcnTGREuQWT3RsDSOJi16Ki+je31dWlueN0WoW0FaPkCmnYuCd2EjRXIAP4JhZ3QATJwAO3NyYDFLVmUpP1x8g4+BcEsANGpxYT6AZx9dV0tZTTa1lUWWj4Sgj2t0bWG4jgCdhUtKRD22sadqYEuulVt8bk6UdBV4WwBpVBhWRhljYWO/nEFLCBAQCAszMDEHAAC5HCiJUz2VZDxvOT2fdzqmFSB7EhtuUVODAAN6TE9GICNVISSCWVuGHEVIMDJuTDqHRT+ufzqpcj15Nz9LICOpTESnLUiUlhmJAAAgAElEQVR4nN19j1/bVpbvtYUs2ZZFyApbGGwnsmUhyz/wGBzAuDEkkAKlDIWQlDRNZmlnpvTtbNqGpJluJzOb2elrU/bNvsm+budX/9V3zrmSf4D5DaG7+nQyF/vq+nx1zz2/7xUL+n0+n19gcAnUDGJThpYvjC0mtTqEqBmgj6kpseN2jpoJ6XxG3qdzgL1ehFFHW1iW/ycj3NQi2pP/0QiDb2vPDDksv1aEot/vFzlCahLCMLT8Pt6bPqVmiJp8aGryoY/YOSjO5WES53pTz9JnO/JBnQNMCuAlyRL85zVlOUhN/NBtSths6ytTM9jW47DOIeOZtvDlY82ZczQzepYjH9yZteH3Ztjva5tTzrXMh03OXDI2/dQM+o/ReRnWoOb+b0k+y5EP7uwi7OThPeuS4fe+9uXjDt1tEe/T2feB5mw+0+Y357W5TPgsRz648+tDGDI2C4ElbY4Zm2L4TEc+OUKx69By96EP7+yDNbK98Ctsn/HIB3butg73ytY9C4ALqu6CeL/OfjnxzqfZWx8mznzkAzsHRbzcb/Hi2gJbnuTFi5oharpiGi/38Ry188TPr3+qrVz/+S/ksx75gM6Ha/y2Doer2oM6B1I//wkh/MnPR8525IM6n9ymEY9jeWBnX/DD69d/+UC79cvr1z8KnuXI52S1HYsObIajW8+ePSubZfh3pXDxCP2dvcUDhz6gMzVZOCyHpSQqe/fK04/7wAbn951g5CN2BoQkU0MCXCFqBrHJnwe2BIk+pWaAmgFqU1MSDuosg82U1gsskbCNRELX1z/++J13/tf/euedjz+29UQiaCdsKWUnOdhjjXyczp62ACEruvjFrpIXP3XFtHiomBb9vrDE8gk9n2HGC1BaExnGrn4IMuaf0m+CvPloAp7+C5iNcfjeRqRHH/lYZGDn87FpwhldTxmAjAn0Px1+Jv3x9eu/gG9Hrl//GLl0BD7n/2NhPZ8w/jtZbWHD0Bkbg1YChv9VksnPlpkwPrny4ZvwWeqffzX9qcRSZZFltkJMsAHlmMDyYlAKh/9bIDQydmEMZiSaZ4Fnc28+cD559Dvn+a2tlWJOm8vr+SWtlJv+3a3nzluPPql8+ubb5TCLpoDrxpN2Mn1+CM/GagtDZ9tAfQ5z+MXip5+ZC4uLCxXn8Txct7KWNi+x0JyWK97CDx47FfzaevTpwiZMNwwzIo6EfV1HPo3VdmYXOLl5XbcNCRfX9uY/vVVZsJ4sF2qGT8YvhVTE1Jbhh/Oq01gWwG8Nyj6jlvxi6fHnC5/8YvMD+MoWhTGQsiH88qyug6IYrTndJ3zgb2cAIZUy0jAVE8lUghmTZsPZroky14ciPM5wsmFqS8wvLGtmJO8xF+pDwVg2G1a5xlL5gg0MYBTyuq8bax2FjN2dzyoSBarPloNjIgs9Bb2QeWY5jW1DDnfYNLVFS1t4M6o7mtlI7hpZshdzz+dhNYY/lVnohRywQych4/ysNtBpoPmYOMaefA6rRFwsNxK00NvtUgMQLjGMZpiN2u6RpUSDf/rTZ8yGocKgTMUfjV0q+WxYQsB4tc9/nTW3k+J2KTe31/IWFyxNhyWaV7sg9EtL1eKSmFwuR379OcxlBnSNLkjhs0DYfR2iOXDEMJ6YSMBDlz/54s2tSrnq5KXUQnHxi72rBRHOw+hPNHPR2DNyOFHMLepS0qlYubfezH9i0MBp+chk7EMzWG0tm05u2XS77VQhvKuDj2ETjFo5mhcyoBuSz61G4/GzCvFhsbos7+7MwhVYh3biTViHi7Xw7pFZarGK92465nwjYlkwZColpKPsaGTsT/NxNL6/W4BEBlLY9tJIWV2cG5K3i+NIZaTyRN7TOQxzCHqP6S7CXSNvVktP4M+RhSestrSoPp8g/aEfkYwDaD6lTSMbNvRdet5ovF0DgZpsfJLw5Z9rZsXYG00EhGC8sSFAmN4bTZy3tM/f9CXfAhkFzLe9GDHnoGGHL9hqk+10ajy9/ZZWrsk4huRYjadibd5p6MHdnY1FU3MMJs5rViO1B2GtYTo1caxhLRAZQu2ZNjmWHktEbXZGVht83kLoSZ623v5u7BEqgIwpNMra2xKXasLSggk31BYr8+HdndMNS3ucTqS/1CqLurx75CcLi2gGPLa+5ESHxW213AAbSM6HDyMj2HJ4u9AshfCS6aKmhK1A69MgtgRqSq0OsoDNQEpEONV5SeCdA8nGZ6Cra41yQ2ednVliMUdW25BaXNiUOkcOJhuTGigJ9i9Ffl8Qfm2utIAf6dJhZATlA2g+QFscKelj+4xnoMhkv2cwO+aSbEyYEcsxfB2d5SeVLJc0qsonqn3kyUrJmchIy5OLXLMga33RqFgZ2RaPQMb+NJ/aahPH0kvFnCl6neWlSuQ3GSZbTmlb6ugcfmyq6qIezlcA4UKwc2S7YS4YzHiqOl+2DLG5YvVJeqRwumTjqW0a1BXzZVWX3c7hoeICCswlbbKRkNs6o1mqqvNGwZhTwblIdoxcWyyrX8JdycVFvWmmpBtmBYjRD0R4/lYbISzmnJpLB9pmIOWlt7SSYxltneU3tcmS6z1lp7Xt9pGFZ7mq9hy4atNaFL2RAzBsJXQWCE+XAzZ0Y6TcKKtvuyaqKD9xsnO67lvSTG1bbnX2GW83ypFNI19bVicjc2L7yLZW1ubEvP6kYT1rjrytTUasMSPvcelpc8B08YQqtoLNlhTc3aGjb1CeCDMdRWeAdxbyjTKaneFFa9EItXUOhd4smpWKtmhZJVsKto9sVMgWlxfMxnKQjxxKNqzGthAck0NHIeMAmg+NYhySfPX5wAQJLFRzCzUf7xx8u/GWsWlt5ypP3M4+/mAD8qcrZqlSdFY+C/o6RpY3i5Uxa0ncajzLeCaeWawAx7KkdMQc8P40nzYSFbZRUGjlSEuJb6uTVS2yZT3lncMZXpgQMp47IGIrZuW5QUo8YBh8ZHms8qiklVa0JTHsjgwmjtYAE8C++Fhb2LAnRr6oOO3G9G8ms45VLH6Soc7Srd/SaEZws1EqqdlSY4llDBhDWMEvfLJsvFUtWlZk8pbYjCaGFyoLX9hj4AVfOEJf2A98mn6+iPPip9hD9K1IuRSxzAWf8YXkC6fSfpgJNvLTt8XtRk6rqEu9S8+fyj7Q5RmMIiYKfsc0S9nJyCegXzwqKg76T9KRyTgUIWYUvai+6G9lTL3InB+bXjgd29QMYE7SSMu12luNPNgUvi8y+PGcU42oRW3OcH5r+MJAaRRW4vJC8W1pu2hVn7DthvNE8hsADx6O+LuF5JJWVNWqM2mALI5+QVy6UB6qicTGRyNjf5rPIAf89PPGolnewhE++SApjUzUvtRyWnWh9qyyWCMU8BCSz5yi9iSxNbllL0VK5uM0C0fhO19YBOEqOkW1qlm15TFmfPBTUKPyr6bNxcbiIxAg558DPlzVzkXKZtWag+5imqWjy8/Ltc2FsrmdaBTRV4c5NKK1hawVyVW3pj9eWVnIlXLFxaiURqs6MV8Bg3zZNJ0ntWfPN6UEMwrhsLFkVs3Jhuk/BhnnWNeWGV+aL5WWf6ezNDxCPblQXFy+Nb2y4lQBSaMGH6bFfKRaVLXK5MfX3ylbmpq1tAQDLtVri1krm1vYmp5esSvgS8CEC3ow/9uRUtHZHCscGol6TdFEWbK14tK0VcvAMszP50pVa/rjn2ytZNUIIPFNsInl2kLEylaKNIfVHGjFxVp6nOnpvFopqZGV6Y8+nDSrpYrzJoycr82Xn5Yam2gEnskcdtOWxww2+8RyeWu63LBGQEeXq1WtuPXxLx+tVKvFiiWuLH7QeG7U5mCtLT1dmV75l+0GrMOaMN34YOGntckqXJNb199ZyWmlSgXmUJ9uWJNb0454VjHvrhbPHpNot3W0y34KZv710cpkWXtqsKS9WI5UVrZWpp8+US0QNeITzRGDoeWFxttsKVLNfhnablhLLCTNa8+MIFhs2pdPJ1dWtnLZ8qKdYuEXatlcefSvSeH4ZHTr3MVq654DbjOXuiZf/+n6g5XqQmrMWHpemyyr4+a0VRE3F5+nwtKm9pihPlwCs1wDDwp8iJ8+lf3hOQ3sOuOThbeNx8609YusVa69NWeMpxeq059d/4V0IjK6dD6r/GH6nx+sZJ8nf/V5I8HyC5PJhqZqS6ywFA2LlobuoGDI0FSLKoaaMqJPTi6qn4vM90FC2lZVVUvOOcvB/OLnK7VyduVfPiIj8EeVIWX6J4/mnn/BcGLEp+lkI6JGGikWDMu2WtIsGDvgl/MNbUtVE0yAHxOfaUUNjB1JAqhqRM2LTw3AOi8Xnj979AkGCH5kCAVpTLUnfit8qanbsAbeVFUroi7UAnLN0so5bb4GPWqWGnlUgk9ZWKrNoakNTfhUUy0VneOQ3dAeh1e2E+oHVGRxXjngfdfhwUUQvlRjoSaGnGousi1KS5o6aWrqwvLQvKqaZVVbfLK5tABQSvDp4tLmkwVNmzQjmpXSHU11tjR1DqM14DLVpKClpYT9l9bRazF457ZIXKAViWuLLgZbzbYOoba4nuzG9ea0OTnRqJhVbX6pCKqwWlHx0kDzl+H/NJAyVUvLVTRqa1YR0eJVreSKauPJM7VYdlQdno4ptv3I8cjY3Tm4TzR1V4TY5yqi7qrW6yw6mrmgWapTQQBmVq0Ao6oRB4CWJsEWB0sG2FStmCX4tDiJxrZJHRxVnUTYOVMzteq8tpgMdw1UH42Mzs5nuxuh5gA0mK7qZLVkVQBMySyXTZjOiKpVLTA9szhnWqRimlZOxY+9DoC1VJ2Ez+C5aAsJ+cew36KruTRRdqazQLhazJU0hBCJZLOlIlgtuVyuUqk4/IIW/J0Dk6eUzUJ/uEHL5qp0w6RTHpd+vJV7UgV0RLZYrcCEwWVZiIagFEslRONd8FexiLgRteX2rlSL2YiaxWjBj7Vyj4V/Y5mWk6uWIihMaBZxCvn8We0XzmMlh5NIM4hXpFTMOXD/rYz8o63ck7cRVqmaAzpxYgDIlsO5sfg8SwzplC3k3GzWWSzxSdyCSTSpP0xiCcHO7R35x1K5F85s3sI5LGazczmYQa1ogg9c1NSIth0EvRiplGHuyg7MmhPWUf6UHKsI2gW6Vp+UIsTeK5uZvSP/KGwaWgWy6VRQYD7DDFPJnPzLnTtvmOWKqj2p/V6rlCvvXL9+/R3HtNRqEozRXNncgQ6TZXCOt9nbGopZyxEPJ/riEMqJRx88K5uVSHHzsWpZuVUFroel4qSTbeTKJe2d6z+B66NItlxpZCuTVXUUO0w5jhmpLFfVnFme/uA39vkg3DfmfZySOZ8f5+jDUsm0StVyVttQevCytOx0VZ0EOfvhTwhhVs1NZ4srJS03hd8ro1rErDSscjFC9wf3jvzjqNyDS/wIAFwva5HJ6kK5qplTOEWjJTBlYJmVypXch4DgIys3Wcw++b3mlLPfY4eeHViwleJ0Vqv8Eu7/efQM6/bOsnKPOsAkXf95KVdWH2+CjVIp3+nve8Mqg5Vmg1sFC9NyysCSRXSDh0D1mdZO38M7k5XJXHbpS9WqRD4ENv4Ik8cHBSYupHLP65z4548+zsHsRVJsXgNJaRZBnKKo/P0m/R9MJ8pWkEKbj+lvE+w7+ERzemsNrThZffDRRyPyIWbKRVptLFRYqJoqCMXfPymiqq88euS4Fotr5ZhWs4X/OlufOaj4S0/m0WS1cosp6TCiL3ZHifTmlkWUg73WabJ0vTyjBy1Wum9l4nj7gM+xcs8XhsutCsImF3AB37xHPFncZHd22msdthvZrWSBe7c5gfA+I++7Ds+lci9sRPFKJ/GiZpSa6egHFvkNudzKZ7/+9WePtlac3EFXZWXrEXbccv90HiX3GZmK9F5f5V44+W+Xu1+j/+Beo+71Dwdfu7uN7jPuv6W6kHGOlXvh5GXl9V79yS5knKPVhgh7DrtImx9+Hanb6RF2xjgOrdw7FCFQHe+bGe2frccO6qjE6rP9ozN9A4eh9BD69+XSM67ckwp7ECoxuJr4Vr//YagXftsoDPbF9wMZq/cPpgx4xr3J/u8fNjHSSLtuUfpT7PVW7kU7ESqx2ZnBmzdv8z96VkcdrbTN3Ct6Y7gLRrjlRqHX7bK8qFX/ujrFe63dvDm4tusWpX8o/Hor9zoRxmYHqTad9cGnyir4e2VNbeTpN/BO8eZ7wK2tOxTgzkt0i4Bfh9MLqmpGShbdPkywxauXYp0I5S5knKPV1oEwtmYwKlYP9sOnUzktUsJo8NOR8ZGMC7I3/37fpdk47z97qe/GkOTCM+yxsfGsWq1kI9q9Vbh/VqSxmO92/XCE52e1tSOs3+0lxSuwPNCkPFQjpWnNyamLyZH1P0zYmRCH0isbIzgtsQkj3EvTJwiGPvGHryZqC1rV1MxqRLsDo8ZsdzQ2ET8ThCer3GtDWL/LXJJ6icseoi0aUasR1Un+QWe6rtOc4E9EkeR6iqYVP0voEyz1v/PzWqQKd8BtNEC/7EEcqbchPHQddqX5pJV7wXQTYew/BU6QwHROkEmhYLi0ueTISIrjpweXxA4xnX6ZY4hO2Pklr79aIZ8/NuENyO42pXN/XnitlXstfdh84gKT+ukzpS/L6YX/tgEZ/zKlJwqFGYW+T6UTet69KRBablBfvO7wAYZFb8jemZj3M8kuZJxj5V4LYTzpUiOwqx5PvURw2SoAbSSa3zKW/5rfo3xtu8sQP08vQu9qFv7Rdjy2GGx+a8wqHQhfv9UWu9skhlYhXVOTIE2/n/o+omqLNe97GPI2nxBlhrU+FB3wl7+Z6quC+zvl8UVzEgVvKV4YwnZa0i2xMGVqL+H7DausloMtNNHZXdMOPzOnmdZLUJB3tMpqS3gldj+30yM8ZuWehzA20iL2pofw3W+VqUmSij09dxqbzR4Cn0RlRmjdtNzYmOohM2FyVRld3cOmnvhyEb7Gyj2uLZRLchvCptzbeElhRKVn6uHPVhbSrS7peMcECSzjrPysb7WH99641dMFoUCTiNri9VbucYRtlHB1765Dy7nzw+rDjXIuomnOSqiD5Tqeyq9MTYvcMzf6VlfvmM5qE+HNtnFJgF2UTTNrtFGSaVogytQb97JZFYivOo6F+y/a5jl2o/VnasF0nCqeCJLN3ttpW4fJtnF9w8qF2aXKWksXtMtSxNi3sVMum9UsWJvzLWrBqAGTpvnnnKZms1WzbO68vNOcQJRffjT0vF43Yqecw27a8tBgMyGMeSuKgRsGgr3DGcBgvZrNWTt/frsFCUzzlvQV2FJ5x8yVVAr/t91L0xzye4OjJYQIX2vlXoistlmXWCbY+K842+kFTvX1rU6h59EhTUfb/sLZmVrt63u388Z4FKfQljxzF2wlQBh8rZV7pC2aTMrsABnSg7EOQnt4aEJpW63saruYJGerZ08AI3abu082az2ILlbb+VbuEUJP4mHxM+fV/q7hirrepi++btMV6Xi37t4TYZmMZ9PWL8imIWaiKfQedr4rybH324y0f4920aCdD2SkyRru+MbsxSBUhsOsfQoFz2jZMykzbYz5f9oETdfesbWmN2bwSUQpfQbRxCOsQ7FzHXqEM70lOqS+Lnyq9LcJl3+UWghnunW+1LZqvUm8HWtbh6+ncg+1hSszmJRvAxCd3Ut1B8IX7GCE8Y7R+ISDfAJZKr3eyj1A6NqXuHVHaBGl712KbVxKp0Y12zf2cml9on0wgcsocFu4xn+dlXuA0BU0TTnjUnW3vpvqDitTbGsn9na9zdpHYzpXQ+AHX4TVxoU6FwfUkwMWdssPpT/cMS+tZu9uNo3NcG/SG84VYkwavhDLe1ji8TIMowXzmajuitbgTCfEtpXFOkHuXrVKP7fUWEiPZvI428yN0/WdZg5PlgMGhNz8IhqY7jfEwoRnAHQofopzuP/xZyK7f7G20A4BnG0q2ITfkJH78Tg0gYTp0aL6B+SAKZ1MTcwse/lUyjfTp+HODnLysmtbZQz+qBnLi665wpJt0ia2huFi6AT8xqgDPhMWDTB6lnfb5rt+1b0/beDpH3m05uWCaw/2k0O1i4wwL0UM+vanWeqeXfPvzVT5dmfXuLIgosm+AsLTnpk10Zya2CjMGPMVGOFqIQTeNgx0udaaED0pw8Q8dRHzLTZNxFoa/+Ac8F6aT2zTkOvEfMiabEwihMxbik26Y6O0mvD4DCR6DP5igRe8s0T8LXldlT6udVjAZpz1XxBC4pF0/QKstjqyXXgc/zUeuE+bNia3lqJSv43QWRTUPBszmFHAPql0lMkvYNjxFDnOd+PUd9hjADzwJh/E5xHFsV/gVBvx888B7+HSuMFYIZHHGn2duC/B3CltSsnhCRpbzySY3wbtbbMEHpIAGBIh22B5g5/qYQ+DJ+ZJXKYjx6dxsvN5+ImQXsjDbw4fyqX70uxJGllurmBoUlYhBC3ZXbVoBYWlZgepcHm4NwoE2qAoxhlQx6QUPmu94Hk8s7FY/Ftb1/WCkMnrMF3RsRByZgFQjQDRaT1dgH/g+kfs6kmZjI5cgfKLpdiYLsMv+OxCb18/BT92kSG7koaa+9B88hzw6h8xwzlh54M6IfQhZVExZXizuDYYZfwyDOZd0Uyq2TYybiNzc80N3uAjQF5AM4KlhEQgZePBU74/9l1ADjjWRwqNIdsRUaQOJFxGfDKuXLuy6xqH6w/4z+4vrlzxEHIpAyuWEOYFV+isxS7AaovNeMI8QUTpUS5pgq61nH9vYNf1nkgBaVGUR3d/dcl2bxIpeMHECdIteOoHCZ0b+yE8T6uNAkwo9YMp8BCBXzlCwdWKLL87pKFc8uoS2G4vUhkmhAxtBhrDGCfeyADggnhqhCfMAaNNwyQwPvxpXDZGGmX/BOkOMss8hM2CIETo2qMewuZXhJCFSPfgocJGIc3EAi3gKAqdwaNYbfvkgHmpMI/Etdptn+7p4OaACSFQwcQMaQDad48I02k7xDyESry/r3+YKmp2IaRiob5+VxnixDHbQJGVgEdVkEiz4NBGlCPMC3vJkKRAV0LbaT55DhjDtihe6EGnRmREaCOF+SgbAbVHCJX+FLCmLzk4M7wL4cDMYBJ+pjc9qnCEcHdQRKAFm5a3rWMZCuNC52asew64exTjjHLAHCGeVoqnOOPpAdz2ZjY8dDvIEcaB7fgyycc7EMb4ngOxlxnD7hzaeK4WPiGZzmGIAvUSsEg41Y7wdVpthBCPGCBSAGE6ESWhOgIPHizQJEaqR1m6b3b4BtxY2IUQ1EzvYP9sfx4jboAwOA7zbowF8EkZZCCIJMSYnL9QhCAGWNrPEeJBO7B20PUBmzJ9BRDCWu1fW4vFRqUuCME8j83c/vfeQUT4IkVLGBYiredCC6GUOBuE3XPAfrG1Swr1GF8APAfcQujjCKPwc2JUIJHD1olLlTU2YfReQp7cizBfV2bF4DjF7IFLHwTJdgiLac6diDCwB2EnGd1ywHtoPny/xX7aoh0hPuyoDxehTedWGyNSCtcheO0MEMZTXRBmZgEhPBS0uwEhMjcKqxFu4xJrtCPcP/ckdo35noHV5q1D8ANYKEVIBdL9IHpsXzTJZemQMRZD37bLOrwbi901krxazxYzV1m44Cp8fGDpcOc6vACr7bYrSylsmyeSXJffBuMrkXRdxK9jmCruhlAaVmLxuqsPU4Kk6yE+AiFLATMGPVk6eCFW221XH5Kn04EwhacHDRHC+O2bM0rd7opwKK48vHljls+hjn4mE9oQAiGSpw9Ph7BtHfqOkQNGu5T5UozHWxLuOiSEaRgj+AARIjYD1lumC0L/JQwqA05EuC56N3sI86A9fPgAMx7Ck+aA299Z1nzlWtt72LCDJLc1sYPAfQsWSJDVxhH6mwgxdjHE9SHgfk+JTXRBmKgrl6RQEjwjQHjNjRLwYIgEghOXH1ptacO1vIN7yaDXrEntL2LbS/MpcsB9jPtzYR4nREfA41JEiLIUpNF7V+149zkUQYtM5P+D60PyLfQmwgLjPics4DwG69a6WG3nnwPu7+Uxs0DeRUjcSka37FreoA8Hv67XL6W6rsNof73+9W1PH7YjRHs0QSED1wOeuZAMKdYpuB4wIeWRBwSHQUXi0p5hkUXzKXRp0rsQolkgpcDQozoE5FIWGvHWoT/KEaaC3OWHPheBEHNP3LvnEV6xGUKaQOzXEGHsNo3fm7m61ulbKDM3o+QQ92LUWxm+gvIFA6mkHIyMG0F25xRzTxeQAwZGAxoCnBZQ+wbq6gw+enL3X5C2iPW/Pzh4u282puzynkAV9q8N3ny/j2q6htcZ2t0herMJhlRZ89lRiLV+5jlgqXs+tdkBZKmirHNkLB8gFk0hwoSO8h159opbMUzbQ5QuPr7S2jkCcwh8yd+PQYHlBCYCeIwEEY/3tOeAW2R05ID3ofmoOWCuasU2jQ+CEF/4kCIhChospIPk86WSYXT3gcjke/Fd1380EV7e/dUlHU1SlMwJMHV96ZToeZ1oF4oTcTcHvJuMA3PAp84f1tPkmLvqQrfRScdgYMIHSzLhy49Ed1+Ce7E93wyNCDawQchOBJnuxweEbxlCZYFnu+uZ+IVkSOsFSW8tl3FkVXyHTp5kjUHhll2X0IS4+8qMMN842kjI6Tq60BhsQ/a3cUTj7BHukq17j00hhEy0w+g/4QsMXAUtYIyTDIFEW1HFYRci5Hm0PNeGfIFj9DUl6RmW6eTS7gi709w8vYXSstTETLr3PPDHaTeqnwjhW1CxeIAQonmc1ie4mGkiJIPmpAhZE2H0KgXyrtppjNk057CTDIFrBDe13JXmI5/e4hf3aIt6ghwAeRxcJQHTT24+JXhahJj3ZWk7DA7VGOcQRJjsQsbB2sJ/mtNbXH1IvKSnE+M2rUXuRwW4mD8ZwoSHMBXUxxPJPKlbVqhfiE0Tu8kjiTptTtM9Lj0xwqbvRFwKzlOIAvwVaUsAABKwSURBVCJg9qIbciEIb1BAmrAJLHFqhLhPiFulblEDHwdX483YmVptB3kitAD8buXeGrRTzKslYF7WL8BdjS7aolVIs/tCPZMPuMDEDPMqFHSu8gdj++x7OvrpLUfLWwSb7UAaEI4yYtGE4CEUo56kAYT5Pw7uuu42yyp3fzN412ZcCOe9B9VEiEsdaxPzob1kHEwob548mqgo/RIhpMq91gKiPxFhf2zX9e9Nq23PV5i3wMgA6UM3LMKfG71Tb0Y5qJL9vKKJCjp/FL0QPTEvFVyNH8ozL7sWi8/G+Y71PZZ3rA7fxbzsGoUPQ3nu97rBgiAtAqwHv5j9FvEoP6ybSvdwFdEMpN1YNUcYvxs1MqnBmdn6LoSx2dHBVNSITgx7uSc3sgwjyB5Ckf+COHxBe2bQqMnzIgyYOjeWyMvAvDms201R0okwdtdw5U0q7iEECeKqQj6ZAnktCdpceyGVe1g3Spl2UtWk7alYCwsmbY5Q6e+VB2fWsEptdxQDSxxSt2feN7BSmBAm8K17UdbS+sQYyPBUq//6K/cU3NflxRsE7rHaPAzBhAeMJXnuaebScAz3QneJRI3EY7OX+nmsDd/MGmat50Q7EXAN+tKoDqlWfy8Z51u5R5E0dMHR/BB4PApLnvCT0LcSn+Xb7P9GjWE0YfcihFmNJ32vcB8KzBBj34YZr4WiuEWYtZRF246STjLOt3IPEL7Xy9xsrRsxQmERAp4MXkoy+z5yXxiM+/eU+tUuCFN13KgXpB17fWMscwlfScIHcAUN+vj40JCPL2aX7CwXBL40azNqUBdKw2vJ/CuMta2JmJ7o65YhFdZiIIjCFGu7P5S/gYVymI6hmB1xvsGt3t5LZ4Gwk0uPUrmn0A4sSi/QA88LrleA4n0WaF+nWNtw3wAwY9d1aMwq8b5h2jj7J5acxdEQYcZT+PiSGVJHsz1H4NKzr9zju/PIu7hKyQrRVWcJ9HbAors2QAhn9kWYmVUGZvpJ5Y8ztoZBYkSIOSzBrZ6l+H66zk9v2UvG+VbuKbRJFveTuCyVcQlLoGgARZImUSOx5D5c2jsTq+us926dC5pUfYYjxJkjlUN2NzJq7MJOb6EEGzqoqO2p+jJPdVHGbB04LvAdmq6B4EGSRhJkYVRRXonIizDVNvwmOCfcbMBnhYJm8IA9pOdrtYEI5MLUMDxhCjSFXkVnYsNoeF0bAG3x13R0Fstj9yLEz5PGfQSA4XxhNNYfRaipEKzAMPcTadC10+6SPQXCYT/Z/uG0h1Cncl6F6vjZxCuY5LXZ2Vi8u8a/Ct/M9gHC++MYJkAnEPPhKLIoheUGEPiJKRdQuUd2dZSYKphqQ4gnWeBebBY1rgz09/bevP0+isFuVlt0cG0wzGZ61onDM2B9knR2izpJ5OR5scZpTm85ceUeIgQk5Ank2xCSmYxe8FVmvIqN0M8wITOx2/KOurWYQ/X7UTL3ULHX820IwQJHJ4UOtVEuoHKPEHL3kCXaECbqtDWEihiuDddvp6LpxI1+8AN3eU/x/hs3C9HC3fjAFQrGCOhloAxuIQyRskjyEwdef+Ue6fObbnLBM2oSFFNBARTCIjxhvQfc3P094Dp81fMdRi8mcOyZGCxckjQ8dkrF43yH2+u32greqRHkXXiBQFw2o6TgxRHiXPu7tlMI9lbQ4qevxmjNTRi0hKEPagt3QHKBabfw60eYvk8I3+dEuHOIpVHGbOyuFLXTKQwnBVPpV8qBCMEipQoHv52x09IIruymy8nrPPge+PM6vWXfyj1flCNcI/OjSRAsmxHQbrg016kew8eGmhC7IVTuX2MhunsdYxbjA7Eb5NjrbXPIEV6OdiHjPCv3/K88hFK4KWmAY33DuMeOUaEvT8ynvuvZr85bUb5FITou8rQvKYbZjL+NKYIw+PscYfpI2uLsYm1BQoinKjDP10F3Vb4do0MtWAIEoTDCN2h9Nax0RagMfLeOdxfG0IeggPBEXZnB6njd81bgM47wfjT8eq029icPoeAKGUQ4shajfaDgaKSkjE1+UDT+n1fu93SpZO+5fGW8zrNpepolgiiLe0eV2MwYow3wFD0XPISvjK5knONJyes9Pd6hHihgOMKZGN+hBRpcHMvw8PeNWDwVXb88oHRWm/S891UqOkvbUkACGyNpnuEBYzUG9gLZ8mm5DeGffCdHeKLKPfaiDSHFusMpTPPhbnOGxYlUwY8RqksKVk8lH7xafY951+jw/fUhMmJmeXANS0tFm7YZxTH1SoF97mC454msy77XWrkXcP1bOvGCB6kzd8EJwKgaWCX/SsVRpNnwICu03YL5Fy/Wx0f0hD4yvv7iAe65RFWOO1GJyQHlo2V80CN1ZVQYQUOVH2XgIrwS6EbG+VXugdk2rHjnRLmSb3asrvzRMGqJeecDnm5A54C7PhLoACDYb0TXC4bI0gYa67hXXZnpdWs5GFt+/ni5ZhgvemJ3V29yXsfRSeMP2F3JOMf3roUz5ALfbCHkByTEhy2tuvUFL0sDy62337VfQV5iMb9ko+2SwloLsqgxmmX7XEd6q6It/BBvsr+X86k3Ff7rfL+FT/qb4h5MxncmeYcm3tHUciNB0pBlLhniLCdYLCSoNiYlU2kQS6UznPvi0fAlHkxm6cVKiU6y6+FnbFGJNz/pTrlvvHaEJEzrFHv/I5XQ8u3bU7ns5HQpwfL3JUz79Q3FeW7pGm68E3AzTF7Kg51hM50rxZi9BgKVsW+vAsLydOkeP/ELuYOJ36LsoVDbd/JpER6zcg8WAIoaetL5r8HDEEb5FL7UnGxu9PZaPJ5hCfAU+7jx0hekircHMIvC1QcBrIFja+5JmQqeueMfrs/cfehoprbjniIIhOXraPLIuOIfCPuQccg6PHHlHvTIY1IPhooOx0a9c76Uh6WKOXlHicWU2M3ELD9YsIfOEgCjRQBPEVVeIcX0FLmDdA+yqj1Ux5v+PmlaEf6sYneRB2bBWcH86LAe6k7G+VXuMZ/xCjP5vfosJhITnNops7qSu/PQurXxcnU43nIghmUmF/xR2/WSdSMDYrb9fLf68NTGy0dWX19upcKPae2Jj8AaVmZHetHjvGwEupNxfpV7zC+Dd3v3Zl8dd1COcjTKN1q5+A/fZHM5Tbv39xb96EYW/OyFzHQfVQI/EDC7obcOxVBW4Zaio778f9Wy9oaL+q84dKz/5lhM+U4IdifjPN9vIV+D9RFTpvoebvTxox2nvimpkf/aUdXpUmXjzqMW+ZfCJD8xuW/jfyzRCqK5XR5tbFil6YhqfpuNRNyDJZWHGw/7VhXg/4Er+5JxUoSHVu4xMYwuIj77qhWxdt6AK4dn5WpaJKvl/qv9DDZchb4CR5jR0wkqLEFrINV2QoiifA/3Z+H2SETN4Xg7ZraS0+5RojW9LxltXNqV5pNW7mHJHLBpj3JrxyxORzTvLWsR9d4bfX07O+/2tNGOYZsExRwBpIRA3cJDV5y618AbO30PX9Jj8l5rMlm1dlYA4XfB/cnwnU/lHonpEWDTVWXqkeaUy2bZQtKyL1eV3e86wFUo6DwYgG5ugpdSoeGqd5zVw1l9o4SnEFdgxLKlrUwpq4B9XD6AjPOp3CNVK1Iko2fg4VTP1MM3SiqsoO/pk3c7dqNjUNVw97i5GxcwT4wBisxsO8B+UvbKaDaSVbM7MGrPQzpQUbmcDF/QW8keEGXv/uXPVg4WkFX23sG1YU21UY6ReqyVyQfbC/CpBEG61P4oym/wv0zNmcSzT60//4VjXg9f1HvXKGiq3HKsoqrd2/hrRKXXkIHaVzfaKKfsYdCbv7YtGjz32ZzCO5Esj6Peiajf3MlpaslyVmhubfnC3ruGad6pSTVbUXdWp3JqFacOxCvIxDttEdF+OzXm89YgP3EJI4/jKb3tcH58Lio3SqcqavGHqTey1aKKzKD8CTzzU7937biVe7wt2CDKV4uaVdrAM7xV4rIpR8NXqLaWImUZxxPJB5mAMAZkjAUCxoNUflxoPw5UWb2HAqaKJ9Eq36gATfk+C88OBNfwNeFgMs6nco/CB77wdwp4Eys5ePYbMHEPFbK96ch5p7kUMbqICf6EkU/o+lW9YOczeZ47E1vrsEy3kd2trJYi2hvKlHNv695qj/LKdwgZ5xNN5GG8kA7m98uHq6vKD8Wiy6QWPyOf4NIU3nULFvN8Xy9FcDBxhmuxeZoZTSHq+imXTeH+qdXVLQW3RB1Gxrm+lew7RXn3XXxJo1ku5rohVPrc3QmoHXxpXpJCCjEBv9R8M8DqvUgLYY+VnSzj6yFB3Sp/M45AxjkizPOTy+84JTC6p1Bp/0VzSeV6P86TpVwdUtkaIsTAk0y71Gb5Fqge/mDUMh10nrMiWYu8faX/mnRahKdYh7gAuE5cNdWICc//7z/7+8Mi2V3fr/7s71MKP1CWEqC6V/0rerv6rtLWbXCTp+C2UT7zo9CcmnKcrFohJlC+Eo9ExkHr8EQ54ObHgegrLuC13PerPTsRTa1+hkJxugzGKjDaKG40TXnValT965YV0SZiAQ8MnHJULeJs4fsfHlVUDeTo6h1LuzfFzRnhKGQcJEtPqA9dVSv6pSuUlfgzCD/lDs1eEeazZCKvauW6t/GVV9dSmJ/KigqYmkpgTDxdf4P6OlVVrXD3ZENRNjQLAQ68OCIZZx9NbBkT4lekr7M/U1BRgIOhluE//q6ZCgVyiDe9zUyANeVhpQo2eRieCN42raqTvLWjKH1ZOrfmO99RyTgfq42GlikJqtx5CWRFIpUc4CoCqWq1UtJ2hiVXVXBIBdmbTX7iI7bYw5daqVLFFz5lLVXNVbI0h2j3KZdTRybjHBH6pGvemVdTuZ2pqTvZUiXraDtTPX3Zvrgu8fpTfuJCq6yfSizReAukBlZLd3qmXqq5YrUa2Zjq2bjnHrHvqsIzQnhM/1BsNwjZgwFX9935BtzVDc0sVh1QFqsrPUp9XNdtzF/g8YPkYoBniGODhgxFbV0fiyvKG2jilUs5J7sDg/zdM9sHvgoch4z9aD6Ld8kaX3m2F6ZrNiqW40y6RhsWjTJEUhhJG4Zty5KUnzCMqF3QdR1Dhf5hF8+KY1mVly1fAy1u6VhkHEvjHyFO0xo6LKf/1nISpu5RAMKNEK+5ZSN48qeRCdrpQjohGhkfvfOJBO1dN9JKgYvsD201DMljktG18xm9S1Zqq0dQvnFMy5rm7/2pe/Vg5A627FK+O4o+5wkapeelZZrOy57mOJf1s3qX7Fkg9Ek2j2j0vPvwhz+rYKJWH/7wdx6EEvgpQaQF/WlPedBxPWmqacT82/DDh5Vizik5PzzkQSzlvWsnIGO/HLCvtUp9/n1i3tQ8INgcvMYhgo+ggeif1lR8SxzPTRX8nq3WstronLkQPwkF0xuqqpWzYCeo3GJX+q+ciIyuJ5a7eYtAoJm3gKbE0wH4rg63Q6tJyVc3YUBN/tbLa64Nfq8KWq1olXbcKfQKDcUOqy2YaKVA8fiWlyWwZ8CmKW64AIWTkbG388lzT3i1i2mJz6Iy9T29YGzK9Ss885OqK0jtB1IeOJdN0b9QptBz1r6h5au8d0Xw72uIHTf3dHqN73WWbFfcbGTV8pTSfNdIIthCJLqWjLe/kE6eZROYCZ/aUSMvXSl6jQUOVOIHkXEONk2zszT0JxKFyjcm+QX8nTmcSfmSK3g2Dd8JRgeHCIKbCu/ZcaOJr4YOI/qiEPrk6Ff8nTj8NYY3eKFGplnJjxWjHkKR3pbjay+3GBggd+K76KFEnwTh6dchVWj4X7zXVNn87RCuNEnJbh2Xh5C/2MH9tvXCGaV/3d9t5FOsw9PJ0tBuIRa89spT2vF0G4bmdujmv+7nApc1Lr6e+9fahzsxGe2y9Iz0YbOzlF53XQ2+uzKc2Ach3yCdpvOgh9yE9/BX6SOouOPqwzOxado6y+Frf+O+Rvx2XmQ26QahHRtHS74iy4wxMXWDh6MGXl0LHTTyhVptHZ1l8QUVI/bE6sN98UHq3b7q3LVHs2fH+4brVJrXc3k9czSizyUHfODQezqDv/TgMl+OilIfHcwXbtzGAXrXqdML4p/BtUL+5kzcfa9Xz3vrQ7Jw6MjHIuO0lQqHPLz0g/sDPGKKNfmxntEbN6/ejo+ko9GrAzNXbw7OxPFj9ykMXF4fCstHdfmO6R8e6OOLx3GuOzuHg5krr4Z7Ol+Y3hOLx+MxOgKr5Qcqw68eJI8x8rHIOFOrbW9nn75+vw3k3gu+Gr6/fi0jS8cc+TidzxMhXNFr66/6B/bk9nnOfqD/1bqdBul7kpF/LAglWTKGrj342/3+4QEOi8AODPfff7V+DY/Rl0868o8Fod8XlsFyMtJD1668ePCPeP3xxZVr9lDUEE478pE6/38yFUvQ/MLyrgAAAABJRU5ErkJggg==";
        t.drawImage(fail, 90, 50, 100, 200);
    }
}
function roheline() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");
    let r = document.getElementById("raadius");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        // anname tahvli nimi on t
        //ring
        t.beginPath();
        t.fillStyle = "green";
        t.lineWidth = 1;
        t.arc(150, 40, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();
        //ümberjoon
        t.beginPath();
        t.fillStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 125, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();
        //ümberjoon
        t.beginPath();
        t.fillStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 210, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();

    }
}
function kollane() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");
    let r = document.getElementById("raadius");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        // anname tahvli nimi on t
        //ring
        t.beginPath();
        t.fillStyle = "yellow";
        t.lineWidth = 1;
        t.arc(150, 125, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();
        //ümberjoon
        t.beginPath();
        t.fillStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 40, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();
        //ümberjoon
        t.beginPath();
        t.fillStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 210, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();

    }
}
function punane() {
    //määrame tahvli
    const tahvel = document.getElementById("tahvel");
    let r = document.getElementById("raadius");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        // anname tahvli nimi on t
        //ring
        t.beginPath();
        t.fillStyle = "red";
        t.lineWidth = 1;
        t.arc(150, 210, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();
        //ümberjoon
        t.beginPath();
        t.fillStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 40, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();
        //ümberjoon
        t.beginPath();
        t.fillStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 125, 40, 0, 2 * Math.PI, true);
        //x, y-keskpunkt, R
        t.stroke();
        t.fill();

    }
}

function eestiLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l= lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
    }

}

function indoneesiaLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l= lipp.getContext("2d");
        l.fillStyle="red";
        l.fillRect(0,0,330,105);
        l.fillStyle="white";
        l.fillRect(0,105,330,210);

    }

}
function monakoLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l= lipp.getContext("2d");
        l.fillStyle="red";
        l.fillRect(0,0,330,105);
        l.fillStyle="white";
        l.fillRect(0,105,330,210);

    }

}

/* Iseseisvalt lisada veels üks lipp kus olemas vapp või mingi logo


 */
function serbiaLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l= lipp.getContext("2d");
        l.fillStyle="red";
        l.fillRect(0,0,330,70);
        l.fillStyle="darkblue";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
        const fail=new Image();
        fail.src="serbia1.png";
        fail.onload = () => {
            l.drawImage(fail,40,20,150,150);
        }

    }

}