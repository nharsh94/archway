# Terraform implementation of a sample circuit breaker using AWS API Gateway + Lambda
resource "aws_api_gateway_method_settings" "failover" {
  rest_api_id = aws_api_gateway_rest_api.example.id
  stage_name  = aws_api_gateway_stage.example.stage_name
  method_path = "*/*"

  settings {
    throttling_rate_limit = 5
    throttling_burst_limit = 2
    metrics_enabled        = true
  }
}