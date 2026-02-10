import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Rating } from "../components/advanced/RatingComponent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function RatingPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Rating</h2>
          <Badge>Advanced</Badge>
        </div>
        <p className="text-muted-foreground">
          Interactive star rating component with different sizes and states.
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Rating Component</CardTitle>
          <CardDescription>
            System for interactive star ratings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Available Sizes</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm w-24">Small:</span>
                  <Rating size="sm" value={4} />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-24">Medium:</span>
                  <Rating size="md" value={3} />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-24">Large:</span>
                  <Rating size="lg" value={5} />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-3">States</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm w-24">Interactive:</span>
                  <Rating value={0} />
                  <span className="text-xs text-muted-foreground">
                    (Hover and click to select)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-24">Read only:</span>
                  <Rating value={4} readonly />
                  <span className="text-xs text-muted-foreground">
                    (Not editable)
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-3">Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      Service Quality
                    </span>
                    <Rating value={5} readonly size="sm" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Customer rating for the process
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      Risk Level
                    </span>
                    <Rating value={2} readonly size="sm" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Credit risk evaluation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
