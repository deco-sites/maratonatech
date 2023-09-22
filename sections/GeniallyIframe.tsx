export type Props = {
  contentId: string;
};

export default function (props: Props) {
  return (
    <iframe
      frameBorder="0"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      src={`https://view.genial.ly/${props.contentId}`}
      type="text/html"
      // @ts-ignore - allowScriptAccess is not a valid attribute
      allowScriptAccess="always"
      allowFullscreen="true"
      scrolling="yes"
      allownetworking="all"
    >
    </iframe>
  );
}
