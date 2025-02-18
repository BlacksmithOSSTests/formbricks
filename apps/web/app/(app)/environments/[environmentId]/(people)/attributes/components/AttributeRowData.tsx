import { Badge } from "@/modules/ui/components/badge";
import { TagIcon } from "lucide-react";
import { timeSince } from "@formbricks/lib/time";

export const AttributeClassDataRow = ({ attributeClass, locale }) => {
  return (
    <div className="m-2 grid h-16 cursor-pointer grid-cols-5 content-center rounded-lg transition-colors ease-in-out hover:bg-slate-100">
      <div className="col-span-5 flex items-center pl-6 text-sm sm:col-span-3">
        <div className="flex items-center">
          <TagIcon className="h-5 w-5 flex-shrink-0 text-slate-500" />
          <div className="ml-4 text-left">
            <div className="font-medium text-slate-900">
              {attributeClass.name}
              <span className="ml-2">
                {attributeClass.archived && <Badge text="Archived" type="gray" size="tiny" />}
              </span>
            </div>
            <div className="text-xs text-slate-400">{attributeClass.description}</div>
          </div>
        </div>
      </div>

      <div className="my-auto hidden whitespace-nowrap text-center text-sm text-slate-500 md:block">
        <div className="text-slate-900">{timeSince(attributeClass.createdAt.toString(), locale)}</div>
      </div>
      <div className="my-auto hidden whitespace-nowrap text-center text-sm text-slate-500 md:block">
        <div className="text-slate-900">{timeSince(attributeClass.updatedAt.toString(), locale)}</div>
      </div>
    </div>
  );
};
