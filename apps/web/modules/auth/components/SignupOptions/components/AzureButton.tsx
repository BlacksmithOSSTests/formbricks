import { Button } from "@/modules/ui/components/button";
import { MicrosoftIcon } from "@/modules/ui/components/icons";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect } from "react";
import { FORMBRICKS_LOGGED_IN_WITH_LS } from "@formbricks/lib/localStorage";

export const AzureButton = ({
  text = "Continue with Azure",
  inviteUrl,
  directRedirect = false,
  lastUsed,
}: {
  text?: string;
  inviteUrl?: string | null;
  directRedirect?: boolean;
  lastUsed?: boolean;
}) => {
  const t = useTranslations();
  const handleLogin = useCallback(async () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(FORMBRICKS_LOGGED_IN_WITH_LS, "Azure");
    }

    await signIn("azure-ad", {
      redirect: true,
      callbackUrl: inviteUrl ? inviteUrl : "/",
    });
  }, [inviteUrl]);

  useEffect(() => {
    if (directRedirect) {
      handleLogin();
    }
  }, [directRedirect, handleLogin]);

  return (
    <Button
      size="base"
      type="button"
      EndIcon={MicrosoftIcon}
      startIconClassName="ml-2"
      onClick={handleLogin}
      variant="secondary"
      className="relative w-full justify-center">
      {text}
      {lastUsed && <span className="absolute right-3 text-xs opacity-50">{t("auth.last_used")}</span>}
    </Button>
  );
};
