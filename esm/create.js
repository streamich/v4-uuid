const rnd = (octets) => {
    const str = Math.round(Math.random() * 0xff ** octets).toString(16);
    return ('00000000000' + str).slice(-2 * octets);
};
const create = (interps, ...lengths) => () => lengths.reduce((s, len, i) => s + rnd(len) + interps[i + 1], interps[0]);
export default create;
