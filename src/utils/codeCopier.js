import { codeCopiedToast } from "@/components/elements/toast/Toast";

// TODO: get user preference of whether he wants hex or hsl or rbg or rgba etc and then copy
const codeCopier = (code) => {
  navigator.clipboard.writeText(code);
  codeCopiedToast();
};

export default codeCopier;
