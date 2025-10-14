
// Base Dashboard Card Component
const DashboardCard = ({ 
  title,
  value,
  icon: Icon,
  trend = null,
  variant = "default",
  isLoading = false
}) => {
  // Design variants
  const variants = {
    default: "bg-white border-gray-100",
    primary: "bg-blue-50 border-blue-100",
    success: "bg-green-50 border-green-100",
    warning: "bg-amber-50 border-amber-100",
    danger: "bg-red-50 border-red-100",
    info: "bg-cyan-50 border-cyan-100"
  };
  
  // Text color based on variant
  const textColors = {
    default: "text-gray-800",
    primary: "text-blue-600",
    success: "text-green-600",
    warning: "text-amber-600",
    danger: "text-red-600",
    info: "text-cyan-600"
  };
  
  // Trend styling
  const trendStyle = trend && {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-gray-500"
  };
  
  // Card appearance
  const cardClass = `rounded-lg border shadow-sm p-4 ${variants[variant]}`;
  const titleClass = "text-sm font-medium text-gray-500 mb-1";
  const valueClass = `text-2xl font-bold ${textColors[variant]} mb-2`;
  
  // Loading state
  if (isLoading) {
    return (
      <div className={cardClass}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="flex items-center">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={cardClass}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={titleClass}>{title}</h3>
          <div className={valueClass}>{value}</div>
          
          {trend && (
            <div className={`text-xs font-medium flex items-center ${trendStyle[trend.direction]}`}>
              {trend.icon && <span className="mr-1">{trend.icon}</span>}
              {trend.value}
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={`p-2 rounded-md ${variants[variant]} bg-opacity-60`}>
            <Icon size={20} className={textColors[variant]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
